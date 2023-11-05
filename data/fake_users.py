"""THIS CODE WAS WRITTEN BY ABIZAR CHAWALA
HE WASNT SURE HOW TO PUSH IT TO THE REPOSITORY 
AND HIS COMPUTER WAS REALLY SLOW SO I WILL SHOW HIM 
HOW TO CONNECT TO GITHUB AT A LATER DATE

Defraud Investors or show how we will rely on users to give us data? You Decide! 
(its the latter)
Faker is a library we used that contains methods to generate
fake data of various datatypes and attributes, that can be used in tandem with 
the .random method to generate random data.
We used it because the only person who uses the things i make is my mom and my mom is only one data point-KG
"""
import string 
import random
from faker import Faker 
import random
import string
import psycopg2 
from faker import Faker
import random
import string
f = Faker()
def generate_user_id():
    return random.randint(10000, 99999)

def generate_username():
    first_name = f.first_name()
    last_name = f.last_name()
    return f"{first_name.lower()}.{last_name.lower()}"


def generate_email(username):
    domain = random.choice(['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'])
    return f"{username}@{domain}"

def generate_password(length=8):
    characters = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for _ in range(length))



users_data = []
for _ in range(20000):
    user_id = generate_user_id()
    username = generate_username()
    email = generate_email(username)
    password = generate_password()
    users_data.append({
        'user_id': user_id,
        'username': username,
        'email': email,
        'password': password
    })


conn = psycopg2.connect(
    dbname='fish-1',
    user='postgres',
    password='Pratorian123$',
    host='fish-1.cluster-cx0sld70xbt6.us-east-1.rds.amazonaws.com',
    port='5432'
)


cursor = conn.cursor()
for user in users_data:
    insert_query = """
    INSERT INTO your_user_table (user_id, username, email, password)
    VALUES (%s, %s, %s, %s);
    """
    cursor.execute(insert_query, (
        user['user_id'],
        user['username'],
        user['email'],
        user['password']
    ))


conn.commit()
cursor.close()
conn.close()

print ("data loaded successfully!")