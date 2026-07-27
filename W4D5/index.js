// Starting screen
let city = "";

let cityBtn = document.getElementById("city-button");

cityBtn.addEventListener("click", () => {
    city = document.getElementById("city-input").value.trim();

    if (city !== "") {

        // Change screen
        document.getElementById("city-box").style.display = "none";
        document.querySelector("main").style.display = "flex";
        document.getElementById("back").style.display = "inline";
        document.getElementById("intro").innerText = `${city} Weather Report`;

        // Get coordinates
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
            .then(response => response.json())
            .then(report => {

                if (!report.results) {
                    alert("City not found!");
                    return;
                }

                let long = report.results[0].longitude;
                let lat = report.results[0].latitude;

                // Get weather
                return fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
                );
            })
            .then(response => {
                if (!response) return;
                return response.json();
            })
            .then(weather => {

                if (!weather) return;

                document.getElementById("temp").innerText =
                    `Temperature (°C): ${weather.current.temperature_2m}`;

                document.getElementById("humid").innerText =
                    `Humidity: ${weather.current.relative_humidity_2m}%`;

                document.getElementById("wind").innerText =
                    `Wind: ${weather.current.wind_speed_10m} km/h`;
            })
            .catch(error => {
                console.error(error);
                alert("Could not load weather.");
            });
fetch("https://dummyjson.com/quotes/random")
    .then(response => response.json())
    .then(data => {
        document.getElementById("quote").innerText =
            `"${data.quote}" — ${data.author}`;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("quote").innerText =
            "Unable to load quote.";
    });
    }
});

