$(document).ready(function () {
    
    let lastSearch = localStorage.getItem(localStorage.length - 1);
    const apiKey = "a2f983bc7ba44b6c0ae9e1b6609ca7c1";
    let city = lastSearch
    const units = "imperial";
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + units + "&appid=" + apiKey;
    let urlFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=" + units + "&appid=" + apiKey;

    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="
    var APIKey = "&appid=a2f983bc7ba44b6c0ae9e1b6609ca7c1";
    var search = ""
    
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);
        
        var tempF = (response.main.temp - response.main.temp) + 32;
        $('.tempF').text('Kelvin:  ' + tempF);
        
    });
    
    
});