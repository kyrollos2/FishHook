
CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(64) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE user_post (
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES "user" (user_id),
    body_of_water VARCHAR(255) NOT NULL,
    post_date TIMESTAMPTZ NOT NULL,
    photo_url TEXT,
    fish_species VARCHAR(50),
    body_of_water VARCHAR(50),
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL
);


CREATE TABLE weather_report (
    report_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES user_post (post_id),
    date_ DATE NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    weather_condition VARCHAR(255),
    temperature DECIMAL(5, 2)
);
CREATE TABLE body_of_water (
    body_id SERIAL PRIMARY KEY,
    body_name VARCHAR(255) NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL
);

-- Indexes
CREATE INDEX idx_user_post_user_id ON user_post (user_id);
CREATE INDEX idx_user_post_latitude ON user_post (latitude);
CREATE INDEX idx_user_post_longitude ON user_post (longitude);
CREATE INDEX idx_weather_report_latitude ON weather_report (latitude);
CREATE INDEX idx_weather_report_longitude ON weather_report (longitude);
CREATE INDEX idx_weather_report_date ON weather_report (date);
CREATE INDEX idx_fishing_catch_report_latitude ON fishing_catch_report (latitude);
CREATE INDEX idx_fishing_catch_report_longitude ON fishing_catch_report (longitude);
CREATE INDEX idx_fishing_catch_report_date ON fishing_catch_report (date);
CREATE INDEX idx_body_of_water_coordinates ON body_of_water (latitude, longitude);

-- Create the Fishing Catch Report table
CREATE TABLE fishing_catch_report (
    catch_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES user_post (post_id),
    date_ DATE NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    fish_species VARCHAR(50),
    weather_condition VARCHAR(255),
    temperature DECIMAL(5, 2)
);

-- Indexes
CREATE INDEX idx_fishing_catch_report_fish_species ON fishing_catch_report (fish_species);
CREATE INDEX idx_fishing_catch_report_weather_condition ON fishing_catch_report (weather_condition);
CREATE INDEX idx_fishing_catch_report_temperature ON fishing_catch_report (temperature);