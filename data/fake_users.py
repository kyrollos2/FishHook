""""THIS CODE WAS WRITTEN BY ABIZAR CHAWALA
HE WASNT SURE HOW TO PUSH IT TO THE REPOSITORY 
AND HIS COMPUTER WAS REALLY SLOW SO I WILL SHOW HIM 
HOW TO CONNECT TO GITHUB AT A LATER DATE"""

#Defraud Investors or show how we will rely on users to give us data? You Decide!
from faker import Faker
import random
import string

f = Faker()


def generate_user_id():
    return random.randint(1000, 9999)

def generate_username(first_name, last_name):
    return f"{first_name.lower()}.{last_name.lower()}"

def generate_email(username):
    domain = random.choice(['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'])
    return f"{username}@{domain}"

def generate_password(length=8):
    characters = string.asciiletters + string.digits + string.punctuation
    return ''.join(random.choice(characters) for  in range(length))

Generate fake data for 5000 users in the USA
usersdata = []
for  in range(5000):
    first_name = f.first_name()
    last_name = f.last_name()
    user_id = generate_user_id()
    username = generate_username(first_name, last_name)
    email = generate_email(username)
    password = generate_password()
    users_data.append({
        'user_id': user_id,
        'username': username,
        'email': email,
        'password': password,
        'first_name': first_name,
        'last_name': last_name
    })
#first commit no save to file, will add later
"""Print to ensure it was generated Correctly"
for user in users_data:
    print(user)"""