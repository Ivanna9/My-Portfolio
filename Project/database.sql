create TABLE person(
    person_id SERIAL PRIMARY KEY,
     person_name VARCHAR(255),
     password CHAR(64),
     person_role VARCHAR(255),
     department VARCHAR(255),
     date_registered TIMESTAMP,
     active VARCHAR(150),
     email VARCHAR(150),
     phone_number VARCHAR(50),
     location_id INT,
     FOREIGN KEY (location_id) REFERENCES location(location_id)
);

CREATE TABLE technical (
    technical_id SERIAL PRIMARY KEY,
    location_id INT,
    inventory_code VARCHAR(50),
    name VARCHAR(100),
    class VARCHAR(50),
    subclass VARCHAR(50),
    FOREIGN KEY (location_id) REFERENCES location(location_id)
);


CREATE TABLE history_br (
    history_br_id SERIAL PRIMARY KEY,
    person_id INT,
    technical_id INT,
    description TEXT,
    date DATE,
    status VARCHAR(50),
    FOREIGN KEY (person_id) REFERENCES person(person_id),
    FOREIGN KEY (technical_id) REFERENCES technical(technical_id)
);



CREATE TABLE location (
    location_id SERIAL PRIMARY KEY,
    floor VARCHAR(255)
);
