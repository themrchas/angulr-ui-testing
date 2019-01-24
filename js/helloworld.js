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

  //Demonstrates multiple resolves
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


//Shows how to pass parameters
  var solarWithParams = {
    name: 'solarparams',
    url: '/solarparams/{testName}',
    component: 'solarparams',
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


  //Child state of 'astronauts' state
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

 
   //Child state of 'parent' state
   /*var astronautDetailState = {
    name: 'parent.detail',
    url: '/{id}',
    component: 'compAstronautDetail',
   resolve: {
      astronautDetail: function(dataService,astronautInfo,$stateParams) {
        
        return dataService.getAstronautDetail(astronautInfo,$stateParams.id);
      }
    } 
  }
*/

  var baseballTeams = {
    name: 'teams',
   // url: '/parent',
    component: 'compTeams',
/*   resolve: {
      teamInfo: function(dataService) {
        return dataService.getTeams();
      }
    } */
  }

  /*
  var baseballLeagues = {
    name: 'leagues',
  //  url: '/parent',
    component: 'compLeagues',
   resolve: {
      leagueInfo: function(dataService) {
        return dataService.getLeagues();
      }
    } 
  }
  */

  var myAbstract = {
    name: 'my',
    abstract: true,
    url: '/my',
    templateUrl: 'templates/baseball-template.html'

 /*   views: {
      leagues: 'compLeagues',
      teams : 'compTeams',
      '' : 'compBaseball'
    } */
  }


  var messagesAbstract = {
   // abstract:true,
    name: 'my.messages',
     url: '/messages',

      views: {

      leagues: 'compLeagues',
     teams : 'compTeams'
    },
    resolve: {
      leagueInfo: function(dataService) {
        return dataService.getLeagues();
      },
      teamInfo: function(dataService) {
        return dataService.getTeams();
      }
    }
     
  }

 


  /*
  var new = {
    
    name: 'my.messages.new',
     url: '/new',

      views: {

      leagues: 'compLeagues',
      teams : 'compTeams',
    } 
 
  }

*/


var baseballParent = {
 //   abstract: true,
    name: 'baseballParent',
  //  url: '/parent',
  //  component: 'compBaseball',
    templateUrl: 'templates/baseball-template.html',
   /* resolve: {
      leagueInfo: function(dataService) {
        return dataService.getLeagues();
      }
    }  */

    /*views: {
      leagues: 'compLeagues',
      teams : 'compTeams'
    } */
  }


  


  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(helloSolar);
  $stateProvider.state(solarWithParams);
  $stateProvider.state(astronautsState);
  $stateProvider.state(astronautDetailState);


  /*
  $stateProvider.state(baseballTeams);
  $stateProvider.state(baseballLeagues);
  $stateProvider.state(baseballParent);
  $stateProvider.state(parentAbstract);
*/

$stateProvider.state(myAbstract);
  $stateProvider.state(messagesAbstract);


});


myApp.controller('appCtrl',['$scope',function($scope) {

  $scope.planets = ["mars","jupiter","mercury"];

}]);