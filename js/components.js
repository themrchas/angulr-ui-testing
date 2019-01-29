angular.module('test.hellogalaxy',[])

    .component('solarSystem', {

        bindings:{ planets:'<', rockyPlanets:'<'},

        templateUrl: 'templates/solar-system-template.html',

        controller: function () {

            this.ctrlPlanets = ["mars","jupiter","mercury"];

            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
  })


  .component('solarparams', {

  bindings:{ planet:'<'},

    templateUrl: 'templates/planet-template.html',

    controller: function () {

        this.planets = ["mars","jupiter","mercury"];
        this.greeting = 'hello';

        this.toggleGreeting = function () {
            this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello';
        }
    }

})


    .component('compAstronauts', {

        bindings:{ astronautInfo:'<'},
      
          templateUrl: 'templates/astronaut-template-parent.html',
      
          controller: function () {
      
            //  this.planets = ["mars","jupiter","mercury"];
            //  this.greeting = 'hello';
      
            //  this.toggleGreeting = function () {
            //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
             // }
          }

})



.component('compAstronautDetail', {

    bindings:{ astronautDetail:'<'},
  
      templateUrl: 'templates/astronaut-detail-template.html',
  
      controller: function () {
  
        //  this.planets = ["mars","jupiter","mercury"];
        //  this.greeting = 'hello';
  
        //  this.toggleGreeting = function () {
        //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
         // }
      }

})


.component('compSoccer', {

    bindings:{ leagues:'<'},
  
      templateUrl: 'templates/soccer-template-parent.html',
  
      controller: function () {
        //  console.log('hello world');

     //console.log('leagues are',leagues);
  
      
      }

})

.component('compSoccerLeagueDetail', {

    bindings:{ teams:'<'},
  
      templateUrl: 'templates/soccer-league-template.html',
  
      controller: function () {

      //  console.log('leagueInfo is',leagueInfo);
        
      }

})


.component('compTeams', {

    bindings:{ teamInfo:'<'},
  
      templateUrl: 'templates/team-detail-template.html',
  
      controller: function () {
  
        //  this.planets = ["mars","jupiter","mercury"];
        //  this.greeting = 'hello';
  
        //  this.toggleGreeting = function () {
        //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
         // }
      }

})


.component('compBaseball', {

   // bindings:{ teamInfo:'<'},
  
      templateUrl: 'templates/baseball-template.html',
  
      controller: function () {
  
        //  this.planets = ["mars","jupiter","mercury"];
        //  this.greeting = 'hello';
  
        //  this.toggleGreeting = function () {
        //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
         // }
      }

})


.component('compFootballConferences', {

    bindings:{ conferenceInfo:'<'},
  
      templateUrl: 'templates/football-conference-detail-template.html',
  
      controller: function () {
  
        //  this.planets = ["mars","jupiter","mercury"];
        //  this.greeting = 'hello';
  
        //  this.toggleGreeting = function () {
        //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
         // }
      }

})

.component('compFootballTeams', {

    bindings:{ teamInfo:'<'},
  
      templateUrl: 'templates/football-team-detail-template.html',
  
      controller: function () {
  
        //  this.planets = ["mars","jupiter","mercury"];
        //  this.greeting = 'hello';
  
        //  this.toggleGreeting = function () {
        //      this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
         // }
      }

})


.component('compTerribleFootballTeams', {

    bindings:{ terribleTeamInfo:'<'},
  
      templateUrl: 'templates/football-terrible-teams.html',
  
      controller: function () {
  
        
      }

})