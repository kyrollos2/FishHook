""" the majority of this file was written by ChatGpt to the prompt 'I have this data file in this format 
I want to iterate through it get a body of waters name, and  x and y coordinates and save it in my ProgestreSQL database
that is hosted in an AWS cloud instance' I then did minor changes and added some exception handling as well as
corrected the way the order was being loaded
We imported geopandas to handle geopositional data for ALL of the lakes and still water
in the US from a CSV file i extracted from the  
(Geographical Index Survey)"""
import geopandas as gpd
import csv

import geopandas as gpd
import psycopg2

# Step 1: Load the NHD Data
nhd_file_path = '/Users/kyrollosgirgis/Documents/BigDat.csv'

try:
    nhd_data = gpd.read_file(nhd_file_path)

    # Step 2: Convert 'FTYPE' Column to Strings
    nhd_data['GNIS_NAME'] = nhd_data['GNIS_NAME'].astype(str)

    # Step 3: Filter Water Bodies
    water_bodies = nhd_data[nhd_data['FTYPE'].str.contains('Lake|Pond|River', case=False, na=False)]

    def extract_coordinates_name(row):
        coordinates = row.geometry.centroid.coords[0]
        name = row['GNIS_NAME']  # Replace with the actual column name for names in your dataset
        return name, coordinates[1], coordinates[0]

    water_body_data = [extract_coordinates_name(row) for _, row in water_bodies.iterrows()]

    # Step 4: Establish a connection to your PostgreSQL database
    conn = psycopg2.connect(
        dbname='your_db_name',
        user='your_db_user',
        password='your_db_password',
        host='your_db_host',
        port=5432
    )

    cursor = conn.cursor()

    # Step 5: Insert Data into the PostgreSQL Table
    for name, latitude, longitude in water_body_data:
        insert_query = """
            INSERT INTO your_water_bodies_table (name, latitude, longitude)
            VALUES (%s, %s, %s)
        """
        cursor.execute(insert_query, (name, latitude, longitude))

    conn.commit()
    cursor.close()
    conn.close()

    print("Data has been inserted into the PostgreSQL database.")

except FileNotFoundError:
    print(f"File not found: {nhd_file_path}")
except Exception as e:
    print(f"An error occurred: {str(e)}")
