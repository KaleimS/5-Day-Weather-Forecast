$( document ).ready(function() {
    const APIKey = "";

    const searchForm = $("search-form");
    const searchInput = $("search-input");

    function fetchWeatherData (location) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error("Error", error.message);
        });
    }




});
