angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  
})

.controller('AnaCtrl', function($scope, $http, $stateParams) {
  $scope.yonlendir = function(url){
    window.href.location(url)
  }

  $scope.deneme = $stateParams.detayId

  $scope.gelenveri = [
  {"aciklama":"deneme", "resimURL":"https://i.dugun.com/gallery/g_47711/prev-w2_nisantasi-gelinlik-firmalari-ve-fiyatlari_nrAXQ64d.jpg"},
  {"aciklama":"deneme", "resimURL":"https://i.dugun.com/gallery/g_47711/prev-w2_nisantasi-gelinlik-firmalari-ve-fiyatlari_nrAXQ64d.jpg"},
  {"aciklama":"deneme", "resimURL":"https://cdn.olegcassini.com.tr/cicek-islemeli-dusuk-omuzlu-prenses-gelinlik-indirim-dreamon-for-oleg-cassini-8873-43-B.jpg"}, 
  {"aciklama":"deneme", "resimURL":"https://cdn.olegcassini.com.tr/cicek-islemeli-dusuk-omuzlu-prenses-gelinlik-indirim-dreamon-for-oleg-cassini-8873-43-B.jpg"}
  
  ];
});