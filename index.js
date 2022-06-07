const apikey="0acc6612711d041231626135a5bbefbf"



//const weatherUrl=`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&exclude=minutely,hourly&appid=${apikey}`

$( document ).ready(function() {
    $("#Search").on("submit",async function(event){
        event.preventDefault();
        const city = $(".city").val()
        const weatherUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&exclude=minutely,hourly&appid=${apikey}`
        const response = await fetch(weatherUrl)
        
        const data = await response.json();
        console.log('data', data)
        $(".dailyWeather").html(`
            <div>
            <h1>
            ${data.name}
            <img src="https://openweathermap.org/weather-conditions" />
            </h1>
                <p>Temp: ${data.main.temp} °F</p>
                <p>Wind: ${data.wind.speed} MPH</p>
                <p>Humidity: ${data.main.humidity}</p>
               
                </div>
        `);
    })
});