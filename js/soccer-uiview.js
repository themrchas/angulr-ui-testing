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
        component: 'compSoccerLeagueDetail',  //This uses un-named uiview
     // views:{
        
       // 'commonView' : 'compSoccerLeagueDetail'
     //   },
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
       // component: 'compSoccerTeamDetail',
       views:{

        //Target teamDetails vies in grandparent state
        'teamDetails@^.^' : 'compSoccerTeamDetail' 

        /* Target teamDetails view in grandparent state 
       'teamDetails@soccer' : 'compSoccerTeamDetail' */

       /*Target commonView in grandparent, soccer, state - targeting same view+state as parent
       'commonView@soccer' : 'compSoccerTeamDetail' */
       },
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