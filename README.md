# Air Quality Monitoring Dashboard 🌍

The **Air Quality Monitoring Dashboard** is a web application that allows users to check the Air Quality Index (AQI) of any city. It provides real-time AQI data along with pollutant levels using the OpenWeatherMap API.
---
## Features ✨

- **City Search**: Users can search for any city and get detailed AQI and pollutant information.
- **Dynamic Updates**: Displays real-time data fetched from the OpenWeatherMap API.
- **Interactive UI**: User-friendly interface with a modern design.
- **Air Quality Messages**: Displays the air quality level (e.g., Good, Moderate, Hazardous) based on the AQI value.
- **Pollutant Breakdown**: Detailed information about pollutant levels (e.g., CO, NO₂, O₃).
---
## Tech Stack 🛠️

- **Frontend**: HTML, CSS, JavaScript, Chart.js
- **Backend**: Flask (Python)
- **API Integration**: OpenWeatherMap API
- **Styling**: Responsive design with custom CSS
---
## **Setup Instructions**
### Prerequisites
Ensure you have Python 3.8+ and `pip` installed on your system.

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayushpremrocks/Air-Quality-Monitoring-Dashboard
2. Create a Virtual Environment (Optional but Recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate    # On macOS/Linux
   venv\Scripts\activate       # On Windows
3. Install Flask:
   ```bash
   pip install Flask
   ```
4. Install requests
   ```
   pip install flask requests
   ```
5. Run the Flask app:
   ```bash
   python app.py

6. Open your browser and go to:
   ```bash
   http://127.0.0.1:5000
---
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
