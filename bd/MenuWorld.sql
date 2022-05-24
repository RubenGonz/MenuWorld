DROP DATABASE IF EXISTS MENUWORLDDB;
CREATE DATABASE IF NOT EXISTS MENUWORLDDB;

USE MENUWORLDDB;

DROP TABLE IF EXISTS USER_PROFILE;
CREATE TABLE IF NOT EXISTS USER_PROFILE (
    real_name VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL,
    user_password VARCHAR(20) NOT NULL,
    native_language VARCHAR(2),
    biography VARCHAR(100),
    img LONGBLOB,
    birth_date DATE,
    PRIMARY KEY (user_name)
);

DROP TABLE IF EXISTS POST;
CREATE TABLE IF NOT EXISTS POST (
    id INT AUTO_INCREMENT NOT NULL,
    author VARCHAR(20) NOT NULL,
    post_tittle VARCHAR(20) NOT NULL,
    description VARCHAR(100),
    post_date DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (author)
        REFERENCES USER_PROFILE (user_name)
);

CREATE TABLE IF NOT EXISTS POST_CATEGORY (
    post_id INT NOT NULL,
    category_name VARCHAR(20) NOT NULL,
    PRIMARY KEY (post_id,category_name),
    FOREIGN KEY (post_id)
        REFERENCES POST (id)
);

CREATE TABLE IF NOT EXISTS USER_LIKES (
    user_name VARCHAR(20) NOT NULL,
    post_id INT NOT NULL,
    PRIMARY KEY (user_name,post_id),
    FOREIGN KEY (user_name)
        REFERENCES USER_PROFILE (user_name),
    FOREIGN KEY (post_id)
        REFERENCES POST (id),
);

CREATE TABLE IF NOT EXISTS STEP (
    post_id INT NOT NULL,
    step_number INT AUTO_INCREMENT NOT NULL,
    tittle VARCHAR(20) NOT NULL,
    description VARCHAR(100),
    PRIMARY KEY (post_id,step_number),
    FOREIGN KEY (post_id)
        REFERENCES POST (id)
);
