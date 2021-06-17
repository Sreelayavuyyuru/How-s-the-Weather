String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

function fetchtheWeather() {
  var city = $('#fetch-city').val();
  console.log(city);
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a720ef74e9417eb6222991d3b7efcc7e";
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    var resp = JSON.parse(xhrRequest.response);
    var weather = resp.weather[0].description;
    console.log(weather);
    var c = city.capitalize();
    var intext = c + " is experiencing " + weather;
    $('#answer').text(intext);
  };
  xhrRequest.open('GET', url, true);
  xhrRequest.send();
}

$('#city-button').click(fetchtheWeather);

// Location based weather from here


function fetchtheWeatherByLoc() {
  var city = $('#fetch-city').val();
  console.log(city);
  var url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a720ef74e9417eb6222991d3b7efcc7e";
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    var resp = JSON.parse(xhrRequest.response);
    var weather = resp.weather[0].description;
    console.log(weather);
    var c = city.capitalize();
    var intext = c + " is experiencing " + weather;
    $('#answer').text(intext);
  };
  xhrRequest.open('GET', url1, true);
  xhrRequest.send();
}

var x = document.getElementById("answer");

var lat, lon;

function getLoc(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lon, lat);
    });
  } else {
    alert("Sorry, your browser does not support geolocation services.");
  }
  fetchWeatherbyLoc();
}

function fetchWeatherbyLoc(){
  var url2 = "api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=a720ef74e9417eb6222991d3b7efcc7e";
  console.log(url2);
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.onload = function () {
    console.log(xhrRequest.response);
    var resp = JSON.parse(xhrRequest.response);
    var weather = resp.weather[0].description;
    console.log(weather);
    // var intext = c + " is experiencing " + weather;
    // $('#answer').text(intext);
    xhrRequest.open('GET', url2, true);
    xhrRequest.send();
  }
}

$('#fetch-weather').click(getLoc);