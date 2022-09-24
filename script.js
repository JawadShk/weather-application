// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key : "0475fc68a0d14309187c35beb0bfd1a0",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searhInputBox = document.getElementById('input-box');

searhInputBox.addEventListener("keypress", (event) => {
    if(event.keyCode == 13){
        // console.log(searhInputBox.value);
        getWeatherReport(searhInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById("city").innerHTML = `${weather.name},${weather.sys.country}`;
    let temp = document.getElementById("temp").innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let minMaxtemp =  document.getElementById("min-max").innerHTML = `${Math.round(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`
    let weatherType = document.getElementById("weather");
    weatherType.innerHTML = `${weather.weather[0].main}`;
    // let icon = document.getElementById("img").src = "images/clearicon.jpg";

    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if(weatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        // document.getElementById("img").src = "images/clearicon.jpg";
        // var g = document.getElementById("img-d").src;
        //     document.getElementById("img").innerHTML = g;

    }else if(weatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('images/cloud.jpg')";

    }else if(weatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('images/haze.jpg')";

    }else if(weatherType.textContent == 'Rain'){
        document.body.style.backgroundImage = "url('images/Rain.jpg')";

    }else if(weatherType.textContent == 'snow'){
        document.body.style.backgroundImage = "url('images/snow.jpeg')";

    }else if(weatherType.textContent == 'Thunderstrom'){
        document.body.style.backgroundImage = "url('images/thunderstrom.jpeg')";
        
    }else if(weatherType.textContent == 'Sandstrom'){
        document.body.style.backgroundImage = "url('images/sandstrom.jpeg')";
        
    }
}

function dateManage(dateArg){
    let days = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", " Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "Septemer", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date =  dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
