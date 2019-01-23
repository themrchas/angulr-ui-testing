var myApp = angular.module('helloworld', ['ui.router','test.hellogalaxy']);

myApp.config(function($stateProvider) {

  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  var helloSolar = {
    name: 'solar',
    url: '/solar',
    component: 'solarSystem',
    resolve: {
      planets: function(dataService) {
        return dataService.getPlanets();
      },
      rockyPlanets: function(dataService) {
        return dataService.getRockyPlanets();
      }
    }
  }


  var solarWithParams = {
    name: 'solarWParams',
    url: '/solarp/{testName}',
    component: 'solarSystemWParams',
   resolve: {
      planet: function($transition$) {
        return $transition$.params().testName;
      }
    } 
  }


  var astronautsState = {
    name: 'astronauts',
    url: '/astronauts',
    component: 'compAstronauts',
   resolve: {
      astronautInfo: function(dataService) {
        return dataService.getAstronautInfo();
      }
    } 
  }

  var astronautDetailState = {
    name: 'astronauts.detail',
    url: '/{id}',
    component: 'compAstronautDetail',
   resolve: {
      astronautDetail: function(dataService,astronautInfo,$stateParams) {
        
        return dataService.getAstronautDetail(astronautInfo,$stateParams.id);
      }
    } 
  }



  


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(helloSolar);
  $stateProvider.state(solarWithParams);
  $stateProvider.state(astronautsState);
  $stateProvider.state(astronautDetailState);



});


myApp.controller('appCtrl',['$scope',function($scope) {

  $scope.planets = ["mars","jupiter","mercury"];

}]);