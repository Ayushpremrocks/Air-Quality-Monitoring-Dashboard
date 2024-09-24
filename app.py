from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

API_KEY = '9d866c30e6a1ad71946902cc0356d16d'

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/get_aqi', methods=['POST'])
def get_aqi():
    data = request.get_json()
    city = data['city']
    
    geo_url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
    geo_response = requests.get(geo_url)
    geo_data = geo_response.json()
    
    if geo_response.status_code != 200:
        return jsonify({'error': geo_data.get('message', 'Error fetching coordinates')}), 400

    lat = geo_data['coord']['lat']
    lon = geo_data['coord']['lon']
    
    aqi_url = f"http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={API_KEY}"
    aqi_response = requests.get(aqi_url)
    aqi_data = aqi_response.json()
    
    if aqi_response.status_code == 200:
        aqi = aqi_data['list'][0]['main']['aqi']
        pollutants = aqi_data['list'][0]['components']
        
        return jsonify({
            'city': city,
            'aqi': aqi,
            'pollutants': pollutants,
        })
    else:
        return jsonify({'error': 'Unable to fetch AQI data'}), 400

if __name__ == '__main__':
    app.run(debug=True)