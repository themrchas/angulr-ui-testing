angular.module('helloworld')

.config(function($stateProvider) {

    var soccerState = {
        name: 'soccer',
        url: '/soccer',
        component: 'compSoccer',
       resolve: {
          leagues: function(dataService) {
            return dataService.getSoccerLeagues();
          }
          
        } 
      }
    
    
      //Child state of 'soccer' state
      var soccerLeaguesState = {
        name: 'soccer.league',
        url: '/league/{id}',
        component: 'compSoccerLeagueDetail',
       resolve: {
          teams: function(dataService,$stateParams) {
              console.log('$stateParams, $stateParams.id',$stateParams, $stateParams.id);
              return dataService.getSoccerLeagueTeams($stateParams.id);
          }
        } 
      }


       //Child state of 'soccer' state
       var soccerTeamState = {
        name: 'soccer.league.team',
        url: '/team/{name}',
        component: 'compSoccerTeamDetail',
       resolve: {
          teams: function(dataService,$stateParams) {
              console.log($stateParams, $stateParams);
              return dataService.getSoccerLeagueTeams($stateParams.name);
          }
        } 
      }
    
      $stateProvider.state(soccerState);
      $stateProvider.state(soccerLeaguesState);
      $stateProvider.state(soccerTeamState);
     

  });