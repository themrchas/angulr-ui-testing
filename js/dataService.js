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
        deferred.resolve(['Mercury','Venus', 'Earth']);

    }, 6000)

    return deferred.promise;
}


    function getAstronautInfo() {

        var bioData = [{ name: "Neil Arstrong", birthCity: "Wapakoneta", birthState: "Ohio", university: "Purdue", id: 1 },
        { name: "Gene Cernan", birthCity: "Chicago", birthState: "Illinois", university: "Purdue", id: 2 },
        { name: "Charles Duke", birthCity: "Charlotte", birthState: "North Carolina", university: "Naval Academy", id: 3 }
        ];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(bioData);

        }, 3000)

        return deferred.promise;
}


function getAstronautDetail(astronautInfo,id) {

    return astronautInfo.find(function(el) {
        return el.id == id;
    })

}


return {
    getPlanets:getPlanets,
    getRockyPlanets: getRockyPlanets,
    getAstronautInfo:getAstronautInfo,
    getAstronautDetail:getAstronautDetail
}

}]);