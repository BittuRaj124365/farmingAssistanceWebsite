async function getWeather() {
    const location = document.getElementById('locationInput').value;
    const resultDiv = document.getElementById('weatherResult');
    resultDiv.innerHTML = "Loading...";
  
    const apiKey = "42f68167ce024f83b15154419251403"; // replace with your real key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.error) {
        resultDiv.innerHTML = `<p style="color:red;">${data.error.message}</p>`;
        return;
      }
  
      const { temp_c, condition, wind_kph, humidity } = data.current;
      const { name, region, country } = data.location;
  
      resultDiv.innerHTML = `
        <h3>${name}, ${region}, ${country}</h3>
        <img src="${condition.icon}" alt="${condition.text}">
        <p><strong>${condition.text}</strong></p>
        <p>Temperature: ${temp_c} °C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${wind_kph} km/h</p>
      `;
    } catch (error) {
      resultDiv.innerHTML = `<p style="color:red;">Failed to fetch weather data.</p>`;
    }
  }
  