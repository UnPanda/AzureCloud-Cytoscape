var app = angular.module('app', [ 'ui.router',
                                  'ui-notification',
                                  'ngStorage',
                                  'ui.bootstrap']);


app.run(function($rootScope, $localStorage){
  $rootScope.user = ($localStorage.user != null && $localStorage.user.token != "") ? $localStorage.user : "";
});

app.controller('homeController', function ($scope) {
  $scope.helloworld = "Hello world by AngularJS";
});

app.controller('showCaseController', function ($scope,$http) {
    $http.get("jsonprint.json").then(function(response) {
        $scope.myData = response.data.records;
    });
});

app.controller('profileController', function ($rootScope, $scope, $http) {

  if ($rootScope.user) {
    $http.get(app.path + "api/get_user_details?nickname=" + $rootScope.user.nickname)
      .then(function(res) {

        $scope.userDetails = res.data;

      }, function(res) {
        console.log("http error!");
    });
  }
});

app.controller('sellerController', function ($rootScope, $scope, $http) {
  if ($rootScope.user) {
    $http.get(app.path + "api/get_user_details?nickname=" + $rootScope.user.nickname)
      .then(function(res) {

        $scope.userDetails = res.data;

      }, function(res) {
        console.log("http error!");
    });
  }
});
