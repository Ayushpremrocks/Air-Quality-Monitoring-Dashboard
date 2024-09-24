document.addEventListener('DOMContentLoaded', () => {
    const checkAqiButton = document.getElementById('check-aqi');
    
    checkAqiButton.addEventListener('click', async () => {
        const city = document.getElementById('city').value;
        
        if (city) {
            document.getElementById('results').innerHTML = '';

            const response = await fetch('/get_aqi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ city }),
            });

            const data = await response.json();

            if (data.error) {
                document.getElementById('results').innerHTML = `<div class="alert">Error: ${data.error}</div>`;
            } else {
                const aqi = data.aqi;
                const pollutants = data.pollutants;

                let qualityMessage = '';
                if (aqi === 1) {
                    qualityMessage = 'Air Quality: Good 🌿';
                } else if (aqi === 2) {
                    qualityMessage = 'Air Quality: Fair 🌼';
                } else if (aqi === 3) {
                    qualityMessage = 'Air Quality: Moderate 🌤️';
                } else if (aqi === 4) {
                    qualityMessage = 'Air Quality: Poor 🌧️';
                } else if (aqi === 5) {
                    qualityMessage = 'Air Quality: Hazardous ☣️';
                }
                
                let resultHtml = `<div class="result-card"><h3>Air Quality in ${data.city}</h3>`;
                resultHtml += `<div class="aqi-box"><div class="aqi">AQI: <span class="aqi-value">${aqi}</span></div>`;
                resultHtml += `<div class="quality-message">${qualityMessage}</div></div>`;
                
                resultHtml += `<h4>Pollutants:</h4><div class="pollutants-box">`;
                
                for (const [key, value] of Object.entries(pollutants)) {
                    resultHtml += `<div class="pollutant-item"><span class="pollutant-name">${key.toUpperCase()}:</span> <span class="pollutant-value">${value} μg/m³</span></div>`;
                }
                
                resultHtml += `</div></div>`;
                
                document.getElementById('results').innerHTML = resultHtml;
            }
        }
    });
});