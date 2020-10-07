$(document).ready(function() {
var APIKey = "166a433c57516f51dfab1f7edaed8413"                                                 //"87e34ee7a0d23a67e01ae8bed06ef1e4";
//var currentURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
//var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minute,hourly,alerts&appid=" + APIKey;
//var currentURL= "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=166a433c57516f51dfab1f7edaed8413&units=imperial";
//var cities=[];
console.log("test");
var CurrentDateEl = $(".current-date");



$("#submit-Btn").on("click", function(event){
    event.preventDefault();
    var searchValue=$("#search-town").val();

    if(searchValue=== "") {
        alert("Please enter a city");                //if user doens't enter any data and clicks 'search' they are prompted to enter a city name
        return;
    }

    console.log(searchValue);
    searchWeather(searchValue);
})







function searchWeather (searchValue){
    //convert today's date.
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    var today = mm + '/' + dd + '/' + yyyy;
    //let temp = (main.temp - 273.15) * (9 / 5) + 32;

    $.ajax({
        method: "GET",    //here the city entered will be passed into the API 
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=166a433c57516f51dfab1f7edaed8413&units=imperial" 
      })
      .then(function(response) {
        console.log(response);
        uvSearch(response.coord.lat, response.coord.lon);


        $("#city-name").html(response.name);
        $(".current-date").html(`${today}`);
        $("#humidity").html(response.main.humidity);
        $("#wind-speed").html(response.wind.speed);
      //  $('#temperature').html(response.main.temp);
        $("#temp-today").html(response.main.temp.toFixed(0));


        getForecast(searchValue);
      })
}


    }) 

function uvSearch(lat, lon){
   
    $.ajax({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/uvi?appid=166a433c57516f51dfab1f7edaed8413&lat=${lat}&lon=${lon}`
      }).then(function(response) {
        console.log(response);
      })
    }


function getForecast(search){
    let day_counter =1;    //setting up the day counter to increment by 1

    $.ajax({
        method: "GET",
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=imperial&appid=166a433c57516f51dfab1f7edaed8413`
      }).then(function(response) {
        for(i=4; i < 40; i +=3){
    



            // setting the weather img for each day.
            var weatherIcon = response.list[i].weather[0].icon

            //each day of forecast iterating through the index
         $("#img" + day_counter).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);          
         $("#date" + day_counter).html(response.list[i].main.temp.toFixed(0));  //date works but puts it in a weird place
         $("#humidity1").html(response.list[i].main.humidity);

         $("#img" + day_counter).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);          
         $("#date" + day_counter).html(response.list[i].main.temp.toFixed(0));  //date works but puts it in a weird place
         $("#humidity" + day_counter).html(response.list[i].main.humidity);

         $("#img" + day_counter).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);          
         $("#date" + day_counter).html(response.list[i].main.temp.toFixed(0));  //date works but puts it in a weird place
         $("#humidity" + day_counter).html(response.list[i].main.humidity);   

         $("#img" + day_counter).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);          
         $("#date" + day_counter).html(response.list[i].main.temp.toFixed(0));  //date works but puts it in a weird place
         $("#humidity" + day_counter).html(response.list[i].main.humidity);

         $("#img" + day_counter).attr("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);          
         $("#date" + day_counter).html(response.list[i].main.temp.toFixed(0));  //date works but puts it in a weird place
         $("#humidity" + day_counter).html(response.list[i].main.humidity);

         day_counter ++;
        }

        
        console.log(response);
      })

}






  
   














