var app = angular.module('olympicsApp', []);

app.controller('AthleteController', function($scope, $http){

  $scope.clicked = false;

  $scope.buildList = function() {
    $http.get('/olympics/badminton').then(function(response){
      $scope.badminton = response.data;
      console.log('Success', response);
    }, function (response) {
      console.log('Failure', response);

    })

    $http.get('/olympics/fencing').then(function(response){
      $scope.fencing = response.data;
      console.log('Success', response);
    }, function (response) {
      console.log('Failure', response);

    })

    $http.get('/olympics/equestrian').then(function(response){
      $scope.equestrian = response.data;
      console.log('Success', response);
    }, function (response) {
      console.log('Failure', response);

    })

    $http.get('/olympics/archery').then(function(response){
      $scope.archery = response.data;
      console.log('Success', response);
    }, function (response) {
      console.log('Failure', response);

    })

    $http.get('/olympics/sailing').then(function(response){
      $scope.sailing = response.data;
      console.log('Success', response);
    }, function (response) {
      console.log('Failure', response);

    })

    $scope.clicked = true;

  }


});
