angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $http, $ionicModal, $timeout) {

$rootScope.webServiceUrl = "https://anilsolmaz.com/gelinlik/webservice.php"

        var ServiceRequest = {
            service_type: "detaylar"
        }

        // Yeni user isteği post edilir ve veritabanına eklenir.
        $http.post($rootScope.webServiceUrl, ServiceRequest).success(function(data) {
            $scope.detaylar = data
        })
      

  
})

.controller('AnaCtrl', function($scope, $rootScope, $http, $stateParams) {
  $scope.yonlendir = function(url){
    window.href.location(url)
  }

  $scope.deneme = $stateParams.detayId

 var Service
});