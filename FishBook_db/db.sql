
CREATE TABLE user_ (       """ this is a line of code that creates a table specific to user information."""
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(64) NOT NULL,
    profile_photo_url TEXT
);


CREATE TABLE user_followers (     """ this is a line of code that creates a table specific to the followers a user has."""
    follower_id INT,
    followee_id INT,
    PRIMARY KEY (follower_id, followee_id),
    FOREIGN KEY (follower_id) REFERENCES user_(user_id),
    FOREIGN KEY (followee_id) REFERENCES user_(user_id)
);


CREATE TABLE user_post (      """ this is a line of code that creates a table specific to the user posts."""
    post_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_ (user_id),
    body_of_water VARCHAR(255) NOT NULL,
    post_town VARCHAR(255) NOT NULL,
    post_state VARCHAR(255) NOT NULL,
    date_ TIMESTAMPTZ NOT NULL,
    photo_url TEXT,
    fish_species VARCHAR(50),
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL

);


CREATE TABLE post_comments (     """ this is a line of code that creates a table specific to the comments that are created on the post."""
    comment_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES user_ (user_id),
    post_id INT REFERENCES user_post (post_id),
    comment VARCHAR(255) NOT NULL,
    comment_date TIMESTAMPTZ NOT NULL
);


CREATE TABLE weather_report (    """ this is a line of code that creates a table specific to the weather data on that specific fishing spot on the map."""
    report_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES user_post (post_id),
    date_ TIMESTAMPTZ NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    weather_condition VARCHAR(255),
    temperature DECIMAL(3, 2)
);


CREATE TABLE body_of_water (    """ this is a line of code that creates a table specific to the body of water, it latitude and logitudenal location on the map."""
    body_id SERIAL PRIMARY KEY,
    body_name VARCHAR(255) NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL
);

CREATE TABLE fishing_catch_report (    """ this is a line of code that creates a table specific to the fishing cath report of the user."""
    catch_id SERIAL PRIMARY KEY,
    post_id INT REFERENCES user_post (post_id),
    date_ TIMESTAMPTZ NOT NULL,
    latitude DECIMAL(9, 6) NOT NULL,
    longitude DECIMAL(9, 6) NOT NULL,
    fish_species VARCHAR(50) NOT NULL,
    weather_condition VARCHAR(255),
    temperature DECIMAL(3, 2)
);


CREATE INDEX idx_user_post_user_id ON user_post (user_id);
CREATE INDEX idx_user_post_latitude ON user_post (latitude);
CREATE INDEX idx_user_post_longitude ON user_post (longitude);
CREATE INDEX idx_user_post_date ON user_post (date_);
CREATE INDEX idx_weather_report_latitude ON weather_report (latitude);
CREATE INDEX idx_weather_report_longitude ON weather_report (longitude);
CREATE INDEX idx_weather_report_date ON weather_report (date_);
CREATE INDEX idx_fishing_catch_report_latitude ON fishing_catch_report (latitude);
CREATE INDEX idx_fishing_catch_report_longitude ON fishing_catch_report (longitude);
CREATE INDEX idx_fishing_catch_report_fish_species ON fishing_catch_report (fish_species);
CREATE INDEX idx_fishing_catch_report_weather_condition ON fishing_catch_report (weather_condition);
CREATE INDEX idx_fishing_catch_report_temperature ON fishing_catch_report (temperature);
CREATE INDEX idx_body_of_water_coordinates ON body_of_water (latitude, longitude);

"""indexes on specific columns of the tables to optimize query performance for commonly used search conditions. Indexes are 
    created on user_post, weather_report, fishing_catch_report, and body_of_water tables to speed up 
    queries involving user IDs, coordinates, dates, fish species, weather conditions, and temperatures."""
