DROP DATABASE IF EXISTS bitcointoyou_db;

CREATE DATABASE bitcointoyou_db;

use bitcointoyou_db;

CREATE TABLE cars (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    year_manufacture Date NOT NULL,
    description VARCHAR(200),
    name_user VARCHAR(100) NOT NULL,
    email_user VARCHAR(100) NOT NULL,
    phone_user VARCHAR(100) NOT NULL,
    created_at DATETIME,
    updated_at DATETIME
);

INSERT INTO cars (name, marca, year_manufacture, description, name_user, email_user, phone_user)
VALUES
("Gol", "Volks", "2022-02-12", "Muito top.", "Léo Porto", "leo.porto.lpm@hotmail.com", "86999215914"),
("Fusca", "Volks", "2022-02-12", "Pau pra toda obra.", "Léo Porto", "leo.porto.lpm@hotmail.com", "86999215914"),
("Belina", "Volks", "2022-02-12", "Vai fazer falta.", "Léo Porto", "leo.porto.lpm@hotmail.com", "86999215914");

SELECT * FROM cars;


