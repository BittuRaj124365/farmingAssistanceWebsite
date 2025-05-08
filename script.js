
    //weather button 
document.getElementById("weatherButton").addEventListener("click", async function () {
    const location = document.getElementById("weatherInput").value.trim();
    const weatherList = document.getElementById("weatherList");
    weatherList.innerHTML = ""; // Clear previous results

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const apiKey = "42f68167ce024f83b15154419251403"; // Ensure ONLY the key is here
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

    try {
        const response = await axios.get(url);

        if (!response.data || !response.data.location) {
            weatherList.innerHTML = "<li>Invalid location. Please enter a valid city name.</li>";
            return;
        }

        const data = response.data;
        
        const weatherInfo = `
            <li><strong>Location:</strong> ${data.location.name}, ${data.location.country}</li>
            <li><strong>Temperature:</strong> ${data.current.temp_c}°C</li>
            <li><strong>Condition:</strong> ${data.current.condition.text}</li>
            <li><strong>Humidity:</strong> ${data.current.humidity}%</li>
            <li><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</li>
        `;

        weatherList.innerHTML = weatherInfo;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherList.innerHTML = "<li>Failed to fetch weather data. Please check the location or internet connection and try again.</li>";
    }
});


        // Function to open popups  (FOR LOGIN/SIGNUP)
function openPopup(id) {
    document.getElementById(id).style.display = "block";
}

// Function to close popups
function closePopup(id) {
    document.getElementById(id).style.display = "none";
}   

// Signup Function
function signup() {
    let username = document.getElementById("signup-username").value;
    let phone = document.getElementById("signup-phone").value;
    let location = document.getElementById("signup-location").value;
    let state = document.getElementById("signup-state").value;
    let password = document.getElementById("signup-password").value;

    if (username && phone && location && state && password) {
        let user = { username, phone, location, state, password };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Signup Successful!");
        closePopup('signup-popup');
    } else {
        alert("Please fill all fields!");
    }
}

// Login Function
function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    
    let storedUser = localStorage.getItem(username);

    if (storedUser) {
        let userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert("Login Successful!");
            closePopup('login-popup');
        } else {
            alert("Incorrect Password!");
        }
    } else {
        alert("User not found!");
    }
}
