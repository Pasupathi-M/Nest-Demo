DROP TABLE roles

create table Roles (
	id SERIAL PRIMARY KEY,
	role_name VARCHAR(255) UNIQUE NOT NULL
);

-- user table column changes
ALTER TABLE users ALTER COLUMN phonenumber TYPE BIGINT