angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $scope.logout = function(){
     $scope.logged = false;
     console.log($scope.logged);
  }

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
.controller('LoginCtrl', function($scope, $state, $rootScope, $stateParams) {
  $scope.user = new Musician();
   $scope.login = function(){
     if(!$scope.user.username || !$scope.user.password)
        return;

     if($rootScope.musician.username == $scope.user.username && 
        $rootScope.musician.password == $scope.user.password){
           $rootScope.logged = true;
           $state.go('app.profile');
     }
   }
})
.controller('RegisterCtrl', function($scope, $state,$rootScope, $stateParams) {
   $scope.user = new Musician();
   $scope.register = function(){
     $rootScope.musician = $scope.user;
     $rootScope.logged = true;
     $state.go('app.profile');
   }

})
.controller('MusiciansCtrl', function($scope, $rootScope, $stateParams) {
  
})
.controller('MyAccountCtrl', function($scope, $state, $rootScope, $stateParams) {
  $scope.user = $rootScope.musician;
  $scope.update = function(){
     $rootScope.musician = $scope.user;
     $state.go('app.profile');
  }
})
.controller('ProfileCtrl', function($scope, $stateParams) {
});

