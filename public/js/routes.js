var app = angular.module('app');

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state("login", {
      url: "/login",
      templateUrl: "partials/login.html",
      controller:"LoginController"
    })
    .state("register", {
      url: "/register",
      templateUrl: "partials/register.html",
      controller: "RegisterController"
    })
    .state("profile", {
      url: '/profile',
      templateUrl: "partials/profile.html",
      controller:"profileController"
    })
    .state("seller", {
      url: '/seller',
      templateUrl: "partials/seller.html",
      controller:"sellerController"
    })
    .state('initial', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'homeController'
    })
    .state("showcase", {
  	  url: "/showcase",
  	  templateUrl: "partials/showcase.html",
  	  controller:"showCaseController"
    })
    .state("contact", {
  	  url: "/contact",
  	  templateUrl: "partials/contact.html"
    });

});
