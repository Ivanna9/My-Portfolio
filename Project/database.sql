create TABLE user (
    user_id SERIAL PRIMARY KEY,
     username VARCHAR(255),
     password CHAR(64),
     user_role VARCHAR(255),
     department VARCHAR(255),
     date_registered TIMESTAMP,
     active VARCHAR(150),
     email VARCHAR(150),
     phone_number VARCHAR(20)
);

create TABLE part (
     part_id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
     part_name VARCHAR(255),
     part_cod VARCHAR(150),
     inventory_code VARCHAR(255),
     part_class VARCHAR(255),
     subclass VARCHAR(150)
);

create TABLE defect (
     defect_id SERIAL PRIMARY KEY,
     part_id VARCHAR(255),
     description VARCHAR(255),
     priority VARCHAR(255),
     date_detected TIMESTAMP,
     date_fixed TIMESTAMP,
     status VARCHAR(100),
     notes VARCHAR(255)
);

create TABLE breakdown (
     breakdown_id SERIAL PRIMARY KEY,
     user_id VARCHAR(255),
     description VARCHAR(255),
     location VARCHAR(255),
     date_reported TIMESTAMP,
     status VARCHAR(255),
     equipment VARCHAR(255),
     technical_assigned VARCHAR(255)
);