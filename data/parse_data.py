import geopandas as gpd
import csv

# Step 1: Load the NHD Data
nhd_file_path = '/Users/kyrollosgirgis/Documents/NHD_H_National_GPKG/NHD_H_National_GPKG.gpkg'
nhd_data = gpd.read_file(nhd_file_path)

# Step 2: Convert 'FTYPE' Column to Strings
nhd_data['FTYPE'] = nhd_data['FTYPE'].astype(str)

# Step 3: Filter Water Bodies
water_bodies = nhd_data[nhd_data['FTYPE'].str.contains('Lake|Pond|River', case=False, na=False)]

# Step 4: Extract Coordinates and Names
water_body_data = []

for index, row in water_bodies.iterrows():
    coordinates = row.geometry.centroid.coords[0]
    name = row['GNIS_NAME']  # Replace with the actual column name for names in your dataset
    water_body_data.append({'Name': name, 'Latitude': coordinates[1], 'Longitude': coordinates[0]})

# Step 5: Save Data to a CSV File
csv_file_path = '/Users/kyrollosgirgis/Documents/HackNJIT/data/water_body_data.csv'

with open(csv_file_path, 'w', newline='') as csv_file:
    fieldnames = ['Name', 'Latitude', 'Longitude']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)
    writer.writeheader()
    for entry in water_body_data:
        writer.writerow(entry)

print(f"Data has been saved to {csv_file_path}")
