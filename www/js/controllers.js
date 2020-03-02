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
    window.location.assign(url)
  }

  $scope.urunId = $stateParams.detayId

 var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'no',
      closebuttoncaption: 'KAPAT?'
    };


    $scope.openlink = function(link) {
        window.open(link, "_blank", "location=yes")
        .then(function(event) {
          // success
        })
        .catch(function(event) {
          // error
        });
    }

    $scope.buttonFilter = function(veri){
      $scope.ara=veri
    }

    $scope.shareAnywhereApp = function() {
        $cordovaSocialSharing.share("Merhaba ben "+$rootScope.user+", BirBileneSor Mobil uygulmasını bu PROMOSYON KODU: "+$rootScope.user_id+ " ile üyelik oluştur, 300 soru sorma hakkı kazan. YKS, KPSS, DGS, TEOG sınavlarına hazırlanıyorsan BirBileneSor sana yeter. PROMOSYON KODU yeni üyelik sayfasında promosyon kod alanına yazman yeterli olacaktır BAŞARILAR.", "Bir Bilene Sor | Mobil uygulama", "https://birbilenesorun.com/assets/img/about/about1.jpg", "http://www.birbilenesor.com.tr");
    };


});