
const API_KEY = "YOUR_API_KEY";

const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const message = document.getElementById("message");
const weatherResult = document.getElementById("weatherResult");

const cityName = document.getElementById("cityName");
const weatherDate = document.getElementById("weatherDate");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const weatherCondition = document.getElementById("weatherCondition");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const pressure = document.getElementById("pressure");

// Show a loading message
function showLoading() {
    message.hidden = false;
    message.className = "message loading";
    message.innerHTML = `
        <span class="spinner"></span>
        <span>Fetching weather data...</span>
    `;

    weatherResult.hidden = true;
    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";
}

// Display errors
function showError(text) {
    message.hidden = false;
    message.className = "message error";
    message.textContent = text;
    weatherResult.hidden = true;
}

// Change background according to weather
function changeWeatherTheme(condition) {
    document.body.classList.remove(
        "sunny",
        "cloudy",
        "rainy",
        "snowy",
        "stormy",
        "default-weather"
    );

    const weather = condition.toLowerCase();

    if (weather.includes("thunderstorm")) {
        document.body.classList.add("stormy");
    } else if (
        weather.includes("rain") ||
        weather.includes("drizzle")
    ) {
        document.body.classList.add("rainy");
    } else if (weather.includes("snow")) {
        document.body.classList.add("snowy");
    } else if (
        weather.includes("cloud") ||
        weather.includes("mist") ||
        weather.includes("fog") ||
        weather.includes("haze") ||
        weather.includes("smoke") ||
        weather.includes("dust") ||
        weather.includes("sand") ||
        weather.includes("ash") ||
        weather.includes("squall")
    ) {
        document.body.classList.add("cloudy");
    } else if (weather.includes("clear")) {
        document.body.classList.add("sunny");
    } else {
        document.body.classList.add("default-weather");
    }
}

// Fetch and display current weather
async function getWeather(city) {
    const trimmedCity = city.trim();

    if (!trimmedCity) {
        showError("Please enter a city name.");
        return;
    }

    if (API_KEY === "3ebc9a572a87b58ab2718c61e40f6947" || !API_KEY.trim()) {
        showError("Please add your OpenWeatherMap API key in script.js.");
        return;
    }

    showLoading();

    try {
        const url =
            `https://api.openweathermap.org/data/2.5/weather` +
            `?q=${encodeURIComponent(trimmedCity)}` +
            `&appid=${API_KEY.trim()}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 400 || response.status === 404) {
                throw new Error(
                    "City not found. Please check the spelling and try again."
                );
            }

            if (response.status === 401) {
                throw new Error(
                    "Invalid API key or key not activated yet. Please check your key."
                );
            }

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please wait and try again."
                );
            }

            throw new Error(
                `Weather service error (${response.status}). Please try again.`
            );
        }

        const data = await response.json();

        // City and local date/time at the searched location
        cityName.textContent = `${data.name}, ${data.sys.country}`;

        const localTime = new Date(
            (data.dt + data.timezone) * 1000
        );

        weatherDate.textContent = localTime.toLocaleString("en-IN", {
            timeZone: "UTC",
            weekday: "long",
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });

        // Temperature and condition
        temperature.textContent =
            `${Math.round(data.main.temp)}°C`;

        weatherCondition.textContent =
            data.weather[0].description;

        feelsLike.textContent =
            `Feels like ${Math.round(data.main.feels_like)}°C`;

        // OpenWeatherMap weather icon
        const iconCode = data.weather[0].icon;

        weatherIcon.src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        weatherIcon.alt = data.weather[0].description;

        // Additional weather information
        humidity.textContent = `${data.main.humidity}%`;
        windSpeed.textContent = `${data.wind.speed} m/s`;
        pressure.textContent = `${data.main.pressure} hPa`;

        // Change background
        changeWeatherTheme(data.weather[0].main);

        // Show results
        message.hidden = true;
        weatherResult.hidden = false;

    } catch (error) {
        console.error("Weather error:", error);

        if (error instanceof TypeError) {
            showError(
                "Unable to connect. Please check your internet connection and try again."
            );
        } else {
            showError(error.message);
        }
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search";
    }
}

// Handle form submission
weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();
    getWeather(cityInput.value);
});
