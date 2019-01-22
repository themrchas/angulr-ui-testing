angular.module('test.hellogalaxy',[])

    .component('solarSystem', {

        bindings:{ planets:'<', rockyPlanets:'<'},

        template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
    '<h3>planets are {{$ctrl.planets}}</h3>' +
    '<h3>rocky planets are {{$ctrl.rockyPlanets}}</h3>' +
            '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

        controller: function () {
            this.greeting = 'hello';

            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
  })


  .component('solarSystemWParams', {

  bindings:{ planetName:'<'},

    template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
'<h3>Your passed param is {{$ctrl.planetName}}</h3>' +
'<a ui-sref="solarWParams({planetName:mars})">' +
  '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

    controller: function () {
        this.greeting = 'hello';

        this.toggleGreeting = function () {
            this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
        }
    }
})