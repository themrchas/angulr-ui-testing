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
        url: '/{id}',
        component: 'compSoccerLeagueDetail',
       resolve: {
          teams: function(dataService,$stateParams) {
             // console.log('$stateParams.id', $stateParams.id);
              return dataService.getSoccerLeagueTeams($stateParams.id);
          }
        } 
      }
    
      $stateProvider.state(soccerState);
      $stateProvider.state(soccerLeaguesState);
     

  });