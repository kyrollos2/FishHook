import requests
import json

# create a function that takes in a lat and lon parameter and returns the apiURL with the parameters filled in
lat = '40.7128'  # Replace with function latitude later on
lon = '-74.0060'  # Replace with function longitude
apiKey = '0c7d87a05a2c2f6053687b5a88f3f304'

url = f'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=daily&appid={apiKey}'

try:
    response = requests.get(url).json()
    print(response)
    response.raise_for_status()
    data = response
    print(data)
except requests.exceptions.HTTPError as err:
    print(f"There was a problem with the fetch operation: {err}")
