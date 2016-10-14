var myApp = angular.module('myApp', ['ngRoute','ngStorage']);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider 
    .when('/details', {
        templateUrl: 'movie.html',
        controller: 'MovieDetailsCtrl'        
    })
    .when('/', {
        templateUrl: 'movieListing.html',
        controller: 'MoviesCtrl'
    })
    .otherwise({
      redirectTo: '/'      
    });
  }
]);

myApp.controller('Ctrl', function($scope,$localStorage,$sessionStorage){
  $localStorage = $localStorage.$default({
    movies: [],
    index: 0
  });
  $scope.movies = $localStorage.movies;   
  $scope.movies = [];
  $scope.currentMovie = {title:"The Lord of the Rings I", genre:"Adventure"};
  $scope.movies.push($scope.currentMovie);
  $scope.currentMovie = {title:"Liar Liar", genre:"Comedy"};
  $scope.movies.push($scope.currentMovie);
  $scope.currentMovie = {title:"Forrest Gump", genre:"Drama"};
  $scope.movies.push($scope.currentMovie);
  $scope.currentMovie = {title:"Fight Club", genre:"Drama"};
  $scope.movies.push($scope.currentMovie);  
  $scope.movie = $localStorage.movie;       
  $scope.setIndex = function(index) {
    $scope.index = index ;                
  }
});

myApp.controller('MoviesCtrl', ['$scope', function ($scope,$localStorage) {      
  $scope.newMovie={title:"",genre:""};
  $scope.addMovie = function() {    
    $scope.toAdd=true;
    $scope.movies.push($scope.newMovie);
    $scope.newMovie="";    
  }
  
  $scope.deleteMovie = function(index) {
    $scope.movies.splice(index,1);
  }  
}]);

myApp.controller('MovieDetailsCtrl', ['$scope', function ($scope,$localStorage) {
  $scope.mov = $scope.movies[$scope.index];
  $scope.temp='';
  $scope.saveChanges = function() {
    $scope.movie = $scope.temp;   
    $scope.movies.splice($scope.index,1);
    $scope.movies.push($scope.movie);
    $scope.mov = $scope.temp;
    console.log($scope.index);
  }  
}]);