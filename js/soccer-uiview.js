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
        url: '/league/{leagueId}',
        component: 'compSoccerLeagueDetail',
       resolve: {
          teams: function(dataService,$stateParams) {
              console.log('$stateParams, $stateParams.id',$stateParams, $stateParams.leagueId);
              return dataService.getSoccerLeagueTeams($stateParams.leagueId);
          }
        } 
      }


       //Grandchild state of 'soccer' state
       var soccerTeamState = {
        name: 'soccer.league.team',
        url: '/team/{teamId}',
        component: 'compSoccerTeamDetail',
       resolve: {
          team: function(dataService,$stateParams) {
              console.log($stateParams);
              return dataService.getSoccerTeamInfo($stateParams.leagueId,$stateParams.teamId);
          }
        } 
      }
    
      $stateProvider.state(soccerState);
      $stateProvider.state(soccerLeaguesState);
      $stateProvider.state(soccerTeamState);
     

  });