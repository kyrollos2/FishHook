import psycopg2 """LIBRARY USED TO CONNECT TO POSTGRE DB  HOSTED ON AWS SERVER"""

def insert_user_post(conn, user_id, body_of_water, post_town, post_state, date_, photo_url, fish_species, latitude, longitude):
    try:
        cursor = conn.cursor()
        insert_query = """
        INSERT INTO user_post (user_id, body_of_water, post_town, post_state, date_, photo_url, fish_species, latitude, longitude)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        RETURNING post_id;
        """
        cursor.execute(insert_query, (user_id, body_of_water, post_town, post_state, date_, photo_url, fish_species, latitude, longitude))
        post_id = cursor.fetchone()[0]
        conn.commit()
        return post_id
    except Exception as e:
        conn.rollback()
        raise e


def insert_weather_report(conn, post_id, date_, latitude, longitude, weather_condition, temperature):
    try:
        cursor = conn.cursor()
        insert_query = """
        INSERT INTO weather_report (post_id, date_, latitude, longitude, weather_condition, temperature)
        VALUES (%s, %s, %s, %s, %s, %s);
        """
        cursor.execute(insert_query, (post_id, date_, latitude, longitude, weather_condition, temperature))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
def insert_body_of_water(conn, body_name, latitude, longitude):
    try:
        cursor = conn.cursor()
        insert_query = """
        INSERT INTO body_of_water (body_name, latitude, longitude)
        VALUES (%s, %s, %s);
        """
        cursor.execute(insert_query, (body_name, latitude, longitude))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
import psycopg2

def set_fishing_catch_report(conn, date_, latitude, longitude, fish_species, temperature, weather_condition):
    try:
        cursor = conn.cursor()
        insert_query = """
        INSERT INTO fishing_catch_report (date_, latitude, longitude, fish_species, temperature, weather_condition)
        VALUES (%s, %s, %s, %s, %s, %s);
        """
        cursor.execute(insert_query, (date_, latitude, longitude, fish_species, temperature, weather_condition))
        conn.commit()
    except Exception as e:
        conn.rollback()
        raise e
