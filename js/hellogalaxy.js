angular.module('test.hellogalaxy',[])

    .component('solarSystem', {

        bindings:{ planets:'<', rockyPlanets:'<'},

      /*  template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
    '<h3>planets are {{$ctrl.planets}}</h3>' +
    '<h3>rocky planets are {{$ctrl.rockyPlanets}}</h3>' +
            '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
*/
        templateUrl: 'templates/solar-system-template.html',

        controller: function () {

            this.ctrlPlanets = ["mars","jupiter","mercury"];

            this.greeting = 'hello';

            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
  })


  .component('solarSystemWParams', {

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
