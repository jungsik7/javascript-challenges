const API_KEY = "4f462e7294405c7edc0bfc3808438b11";

function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    // console.log(url);
    fetch(url).then(response => {
        response.json().then(data => {
            console.log(data);
            // console.log(data.name, data.weather);

            const weatherHtml = document.querySelector("#weather span:first-child ");
            const cityHtml = document.querySelector("#weather span:last-child ");

            const name = data.name;
            const weather = data.weather;

            cityHtml.innerText = name;
            weatherHtml.innerText = `${weather[0].main} / ${data.main.temp}`;

        })
    });

}

function onGeoError() {
    alert("Can't find you.No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
