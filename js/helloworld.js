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

 

  var myAbstract = {
    name: 'my',
    abstract: true,
    url: '/my',
    templateUrl: 'templates/baseball-template.html'

  }


  var messagesAbstract = {

    name: 'my.messages',
    url: '/messages',

    views: {

      leagues: 'compLeagues',
      teams: 'compTeams'
    },
    resolve: {
      leagueInfo: function (dataService) {
        return dataService.getLeagues();
      },
      teamInfo: function (dataService) {
        return dataService.getTeams();
      }
    }

  }


  var football = {
    name: 'football',
    abstract: true,
    url: '/football',
    views :{
     '' : {
        templateUrl: 'templates/football-template.html'
      },



    }
    

  }


var footballInformation = {

    name: 'football.information',
    //url: '/information',
  //  templateUrl: 'templates/football-information-template.html',

    views: {

      'conferences@football': 'compFootballConferences',
      'teams@football' : 'compFootballTeams'
    },
    resolve: {
      conferenceInfo: function (dataService) {
        return dataService.getFootballConferences();
      },
      teamInfo: function (dataService) {
        return dataService.getNationalFootballTeams();
      }
    }
  }

  var footballInformationData = {

    name: 'football.information.data',
    
    views: {
    
     // 'ateams@football.information' : 'compFootballTeams'
     '@football.information': 'compFootballTeams',
     '@football' : 'compTerribleFootballTeams'
    },
    resolve: {
     teamInfo: function (dataService) {
        return dataService.getAmericanFootballTeams();
      },
      terribleTeamInfo: function (dataService) {
        return dataService.getTerribleFootballTeams();
      },
    }

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


$stateProvider.state(football);
$stateProvider.state(footballInformation);
$stateProvider.state(footballInformationData);


});


myApp.controller('appCtrl',['$scope',function($scope) {

  $scope.planets = ["mars","jupiter","mercury"];

}]);