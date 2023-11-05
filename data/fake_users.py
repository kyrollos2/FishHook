import string
import random
from faker import Faker
import psycopg2
from psycopg2 import sql
from psycopg2 import IntegrityError  # Import IntegrityError

f = Faker()

def generate_user_id():
    return None  # The "user_id" column is SERIAL and will be auto-generated.

def generate_username():
    first_name = f.first_name()
    last_name = f.last_name()
    return f"{first_name.lower()}.{last_name.lower()}"

def generate_email(username):
    domain = random.choice(['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'])
    return f"{username}@{domain}"

def generate_password(length=8):
    characters = string.ascii_letters  # Only letters (both uppercase and lowercase)
    return ''.join(random.choice(characters) for _ in range(length))

def generate_profile_photo_url():
    # You can customize this function to generate random URLs for profile photos.
    # This is a placeholder, and you can implement it as needed.
    return "https://example.com/profile-photo.jpg"  # Example URL

def generate_user_data():
    users_data = []

    for _ in range(20000):
        username = generate_username()
        email = generate_email(username)
        password_hash = generate_password(64)
        profile_photo_url = generate_profile_photo_url()  # Customize this function as needed
        users_data.append({
            'email': email,
            'username': username,
            'password_hash': password_hash,
            'profile_photo_url': profile_photo_url,
        })

    return users_data

def insert_users(conn, cursor, users_data):
    for user in users_data:
        try:
            insert_query = sql.SQL("""
                INSERT INTO user_ (email, username, password_hash, profile_photo_url)
                VALUES (%s, %s, %s, %s)
            """)
            cursor.execute(insert_query, (
                user['email'],
                user['username'],
                user['password_hash'],
                user['profile_photo_url'],
            ))
        except IntegrityError:
            # Handle the IntegrityError (e.g., by generating a new data point)
            pass

def main():
    conn = psycopg2.connect(
        dbname='fish-1',
        user='postgres',
        password='Pratorian123',
        host='fish-1.cluster-cx0sld70xbt6.us-east-1.rds.amazonaws.com',
        port=5432
    )

    cursor = conn.cursor()
    users_data = generate_user_data()
    insert_users(conn, cursor, users_data)
    conn.commit()
    cursor.close()
    conn.close()

    print("Data loaded successfully!")

if __name__ == "__main__":
    main()
