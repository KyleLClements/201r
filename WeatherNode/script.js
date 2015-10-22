/*var citiesApp = angular.module('citiesApp', []);
citiesApp.controller('cityController', function($scope) {
  console.log($scope.inCity);
  $http.jsonp('localhost:8080/getCityq=' + $scope.inCity).
    success(function(data, status, headers, config) {
      $scope.cities = data;
    }).
    error(function(data, status, headers, config)) {
      console.log(status);
    }
});*/

$( "#cityfield" ).keyup(function() {
  var url = "http://colelyman.com:3000/getCity?q=" + $("#cityfield").val();
  console.log(url);
  $.getJSON(url, function(data) {
    var cities;
    cities = "<ul>";
    $.each(data, function(i, item) {
      cities += "<li> " + data[i].city;
    });
    cities += "</ul>";
    if($("#cityfield").val() != "") {
      console.log("#cityfield" + $("#cityfield").val());
      $("#txtHint").html(cities);
    }
    else {
      console.log("#cityfield" + $("#cityfield").val());
      $("#txtHint").html("Empty");
    }
  })
  .done(function() {
    console.log("getJSON request successful.");
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("getJSON request failed. " + textStatus);
    console.log("incoming " + jqXHR.responseText);
  })
  .always(function() {
    console.log("getJSON request ended!");
  })
  .complete(function() {
    console.log("complete");
  });
});