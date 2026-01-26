create TABLE
    person (
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
        FOREIGN KEY (location_id) REFERENCES location (location_id)
    );

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE
    technical (
        technical_id UUID DEFAULT uuid_generate_v4 () PRIMARY KEY,
        location_id int,
        code VARCHAR(50),
        inventory_code VARCHAR(50),
        name VARCHAR(100),
        technical_class VARCHAR(50),
        subclass VARCHAR(50),
        FOREIGN KEY (location_id) REFERENCES location (location_id)
    );

CREATE TABLE
    history_br (
        history_br_id SERIAL PRIMARY KEY,
        person_id INT,
        technical_id UUID,
        description TEXT,
        date TIMESTAMP default CURRENT_TIMESTAMP,
        status VARCHAR(50),
        FOREIGN KEY (person_id) REFERENCES person (person_id),
        FOREIGN KEY (technical_id) REFERENCES technical (technical_id)
    );

CREATE TABLE
    location (
        location_id SERIAL PRIMARY KEY,
        floor INT,
        room VARCHAR(10)
    );