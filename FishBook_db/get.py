import psycopg2



def get_user_posts(conn, user_id):
    try:
        cursor = conn.cursor()
        select_query = "SELECT date_, latitude, longitude, fish_species FROM user_post WHERE user_id = %s;"
        cursor.execute(select_query, (user_id,))
        user_posts = cursor.fetchall()
        return user_posts
    except Exception as e:
        raise e




def get_weather_reports(conn, date_, latitude, longitude):
    try:
        cursor = conn.cursor()
        select_query = "SELECT temperature, weather_condition FROM weather_report WHERE date_ = %s AND latitude = %s AND longitude = %s;"
        cursor.execute(select_query, (date_, latitude, longitude))
        weather_reports = cursor.fetchall()
        return weather_reports
    except Exception as e:
        raise e

def get_body_of_water(conn, latitude, longitude):
    try:
        cursor = conn.cursor()
        select_query = "SELECT body_name FROM body_of_water WHERE latitude = %s AND longitude = %s;"
        cursor.execute(select_query, (latitude, longitude))
        body_of_water = cursor.fetchone()
        return body_of_water
    except Exception as e:
        raise e

