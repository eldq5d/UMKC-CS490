// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.weatherforecast = new Array();
        $scope.getWeather = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
                console.log(this);
            if (placeEntered !== null && placeEntered !== "") {
                //This is the API that gives the weather forecast based on zipcode, defaulting to areas in the US.
                var handler = $http.get("http://api.openweathermap.org/data/2.5/weather" +
                    "?zip="+placeEntered+
                    ",us&APPID=47c4fd3d2a02b5fbb5dee88d659ec829");


                handler.success(function (data) {

                    if (data !== null && data.weather !== null && data.weather !== undefined) {

                        for (i=0; i<= data.weather.length; i++){
                            $scope.weatherforecast[i] = {
                                "main": data.weather[i].main,
                                "description": data.weather[i].description,
                                "icon": data.weather[i].icon
                            }
                            if (data.weather[i].icon = '01d')
                                document.getElementByID('#div_VenueList .icon').innerHTML="<img src='http://openweathermap.org/img/w/01d.png'>"


                    }}
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try again.");
                });
            }
        }
    });
