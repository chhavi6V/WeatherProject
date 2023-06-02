const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=41487a453cc27330060fc780d570d2b6&units=metric"

    https.get(url , function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const WeatherData = JSON.parse(data);
            const temp = WeatherData.main.temp;
            const weatherDescription  =WeatherData.weather[0].description;
            console.log(weatherDescription);
            res.send("The temp in Delhi is "+ temp + "degree celcius");
        })
    })

})




app.listen(3000, function(){
    console.log("server is running on port 3000");
})