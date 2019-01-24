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
