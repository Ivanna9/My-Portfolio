START TRANSACTION;
set foreign_key_checks = off;
DROP TABLE IF EXISTS `directors`;
CREATE TABLE `directors` (
  `directorID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `directorName` varchar(100) NOT NULL,
  `directorURL` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie` (
  `movieID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `movieTitle` varchar(200) NOT NULL,
  `movieReleaseDate` int(11) DEFAULT NULL,
  `movieURL` varchar(255) NOT NULL,
  `movieTitleLanguage` varchar(2) NOT NULL,
  `moviePopularity` int(11) NOT NULL,
  `movieImageURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `movie_director`;
CREATE TABLE `movie_director` (
  `movie_id` int(11) NOT NULL,
  `director_id` int(11) NOT NULL,
  UNIQUE KEY (`movie_id`, `director_id`),
  CONSTRAINT `fk_director_m` FOREIGN KEY (`director_id`) REFERENCES `directors` (`directorID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_movie_d` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`movieID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

DROP TABLE IF EXISTS `rating`;
CREATE TABLE `rating` (
  `ratingID` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `ratingUserID` int(11) NOT NULL,
  `ratingURL` varchar(255) NOT NULL,
  `ratingScore` int(11) DEFAULT NULL,
  `ratingTimetampUTC` datetime NOT NULL,
  `ratingCritic` varchar(1000) DEFAULT NULL,
  `ratingCriticLikes` int(11) DEFAULT 0,
  `ratingCriticComment` int(11) DEFAULT 0,
  `movieID` int(11) NOT NULL,
  CONSTRAINT `fk_movie_r` FOREIGN KEY (`movieID`) REFERENCES `movie` (`movieID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


set foreign_key_checks = on;

DROP PROCEDURE IF EXISTS parse_date;

DELIMITER //

CREATE PROCEDURE parse_date()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE counter INT DEFAULT 0;
    DECLARE jsonData TEXT;
    DECLARE cur CURSOR FOR SELECT DISTINCT json_data FROM mubi limit 11000000, 2000000;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    DROP TEMPORARY TABLE IF EXISTS temp_rating;
    DROP TEMPORARY TABLE IF EXISTS temp_rating_null_id;

    CREATE TEMPORARY TABLE temp_rating (
        ratingID INT,
        ratingUserID VARCHAR(255),
        ratingURL VARCHAR(255),
        ratingScore VARCHAR(255),
        ratingTimetampUTC VARCHAR(255),
        ratingCritic varchar(420),
        ratingCriticLikes VARCHAR(255),
        ratingCriticComment TEXT,
        movieID INT
    );

    CREATE TEMPORARY TABLE temp_rating_null_id (
        ratingUserID VARCHAR(255),
        ratingURL VARCHAR(255),
        ratingScore VARCHAR(255),
        ratingTimetampUTC VARCHAR(255),
        ratingCritic varchar(1000),
        ratingCriticLikes VARCHAR(255),
        ratingCriticComment TEXT,
        movieID INT
    );

    OPEN cur;
    read_loop: LOOP
        FETCH cur INTO jsonData;
        IF done THEN
            LEAVE read_loop;
        END IF;

        SET @movieID = CAST(JSON_EXTRACT(jsonData, '$.MovieID') AS UNSIGNED);
        IF NOT EXISTS (SELECT 1 FROM movie WHERE movieID = @movieID) THEN
            INSERT INTO movie (
                movieID, movieTitle, movieReleaseDate, movieURL, movieTitleLanguage, moviePopularity, movieImageURL
            )
            SELECT
                @movieID,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.MovieTitile')) AS movieTitle,
                JSON_EXTRACT(jsonData, '$.MovieReleaseDate') AS movieReleaseDate,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.MovieURL')) AS movieURL,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.MovieTitleLanguage')) AS movieTitleLanguage,
                JSON_EXTRACT(jsonData, '$.MoviePopularity') AS moviePopularity,
                NULLIF(JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.MovieImageURL')), 'null') AS movieImageURL;

            SET @directorID = JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.DirectorID'));
            SET @directorName = JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.DirectorName'));
            SET @directorURL = JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.DirectorURL'));

            WHILE LOCATE(',', @directorID) > 0 DO
                SET @currentDirectorID = SUBSTRING_INDEX(@directorID, ',', 1);
                SET @currentDirectorName = SUBSTRING_INDEX(@directorName, ',', 1);
                SET @currentDirectorURL = SUBSTRING_INDEX(@directorURL, ',', 1);

                IF NOT EXISTS (SELECT 1 FROM directors WHERE directorID = @currentDirectorID) THEN
                    INSERT INTO directors (directorID, directorName, directorURL)
                    VALUES (@currentDirectorID, @currentDirectorName, @currentDirectorURL);
                END IF;

                INSERT INTO movie_director (movie_id, director_id)
                VALUES (@movieID, CAST(@currentDirectorID AS UNSIGNED));

                SET @directorID = SUBSTRING(@directorID, LOCATE(',', @directorID) + 1);
                SET @directorName = SUBSTRING(@directorName, LOCATE(',', @directorName) + 1);
                SET @directorURL = SUBSTRING(@directorURL, LOCATE(',', @directorURL) + 1);
            END WHILE;

            IF NOT EXISTS (SELECT 1 FROM directors WHERE directorID = @directorID) THEN
                INSERT INTO directors (directorID, directorName, directorURL)
                VALUES (@directorID, @directorName, @directorURL);
            END IF;
            INSERT INTO movie_director (movie_id, director_id)
            VALUES (@movieID, CAST(@directorID AS UNSIGNED));
        END IF;

        IF JSON_EXTRACT(jsonData, '$.RatingUserID') = 'null' THEN
            ITERATE read_loop;

        ELSEIF JSON_EXTRACT(jsonData, '$.RatingID') = 'null' THEN
            INSERT INTO temp_rating_null_id (
                ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
            )
            SELECT
                JSON_EXTRACT(jsonData, '$.RatingUserID') AS ratingUserID,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingURL')) AS ratingURL,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingScore'), 'null') AS ratingScore,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingTimetampUTC')) AS ratingTimetampUTC,
                NULLIF(JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingCritic')), 'null') AS ratingCritic,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingCriticLikes'), 'null') AS ratingCriticLikes,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingCriticComment'), 'null') AS ratingCriticComment,
                @movieID;
        
        ELSE
            INSERT INTO temp_rating (
                ratingID, ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
            )
            SELECT
                JSON_EXTRACT(jsonData, '$.RatingID') AS ratingID,
                JSON_EXTRACT(jsonData, '$.RatingUserID') AS ratingUserID,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingURL')) AS ratingURL,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingScore'), 'null') AS ratingScore,
                JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingTimetampUTC')) AS ratingTimetampUTC,
                NULLIF(JSON_UNQUOTE(JSON_EXTRACT(jsonData, '$.RatingCritic')), 'null') AS ratingCritic,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingCriticLikes'), 'null') AS ratingCriticLikes,
                NULLIF(JSON_EXTRACT(jsonData, '$.RatingCriticComment'), 'null') AS ratingCriticComment,
                @movieID;
        END IF;

        SET counter = counter + 1;
        IF MOD(counter, 1000000) = 0 THEN
            INSERT INTO rating (
                ratingID, ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
            )
            SELECT
                ratingID, ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
            FROM temp_rating;

            TRUNCATE temp_rating;

            SELECT CONCAT('Processed ', counter, ' records') AS 'Progress';
        END IF;

    END LOOP;

    CLOSE cur;

    INSERT INTO rating (
        ratingID, ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
    )
    SELECT
        ratingID, ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
    FROM temp_rating;

    INSERT INTO rating (
        ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
    )
    SELECT
        ratingUserID, ratingURL, ratingScore, ratingTimetampUTC, ratingCritic, ratingCriticLikes, ratingCriticComment, movieID
    FROM temp_rating_null_id;

    DROP TEMPORARY TABLE temp_rating;
    DROP TEMPORARY TABLE temp_rating_null_id;

END //

DELIMITER ;

CALL parse_date();


COMMIT;
