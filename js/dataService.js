angular.module('helloworld')

.factory('dataService',['$q',function($q) {


function getPlanets() {

    var deferred = $q.defer();

    var intervalID = setInterval(function() {

        clearInterval(intervalID);
        deferred.resolve(['Saturn','Neptune']);

    }, 5000)

    return deferred.promise;
}

function getRockyPlanets() {

    var deferred = $q.defer();

    var intervalID = setInterval(function() {

        clearInterval(intervalID);
        deferred.resolve(['Mercury','Venus']);

    }, 10000)

    return deferred.promise;
}

return {
    getPlanets:getPlanets,
    getRockyPlanets: getRockyPlanets
}

}]);