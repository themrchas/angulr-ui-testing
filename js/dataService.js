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


function getLeagues() {

    var leagues = ["American", "National"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}

function getTeams() {

    var leagues = ["NY Yankees", "Los Angeles Dodgers", "Boston Red Sox", "Philadelphia Phillies"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}


function getFootballConferences() {

    var leagues = ["American", "National"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}


function getNationalFootballTeams() {

    var leagues = ["Dallas Cowboys", "Washington Redskins", "Green Bay Packers", "Philadelphia Eagles"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}

function getAmericanFootballTeams() {

    var leagues = ["Miami Dolphins", "Jacksonville Jaguars", "New England Patriots", "Oakland Raiders"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}

function getTerribleFootballTeams() {

    var leagues = ["NY Jets", "Oakland Raiders", "Buffalo Bills", "NY Giants"];

        var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(leagues);

        }, 3000)

        return deferred.promise;
}

function getBundesligaTeams() {

    var bundesligaTeams = [{name: "Bayer Leverkusen", id:1}, {name: "VfB Stuttgart", id:2}, {name:"SC Freiburg",id:3}];

   /*     var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(bundeligaTeams);

        }, 3000)

        return deferred.promise; */

        return bundesligaTeams;
}

function getPremiershipTeams() {

    var premiershipaTeams = ["Chelsea", "Arsenal", "Burnley"];

    /*    var deferred = $q.defer();

        var intervalID = setInterval(function () {

            clearInterval(intervalID);
            deferred.resolve(premiershipTeams);

        }, 3000)

        return deferred.promise; */

        return premiershipTeams;
}

function getBundesligaInfo() {

    var teamInfo = [{ name: "Bayer Leverkusen", stadium: "BayArena", city:"Leverkusen", id: 1 },
    { name: "VfB Stuttgart", stadium: "Mercedes Benz Arena", city:"Stuttgart", id: 2 },
    { name: "SC Freiburg", stadium: "Schwarzwalkd-Stadion", city: "Freiburg", id: 3 }
    ];

    var deferred = $q.defer();

    var intervalID = setInterval(function () {

        clearInterval(intervalID);
        deferred.resolve(teamInfo);

    }, 2000)

     return deferred.promise; 

     
}


function getPremieshipInfo() {

    var stadiumData = [{ name: "Chelsea", stadium: "Stamford Bridge", city:"London", id: 1 },
    { name: "Arsenal", stadium: "Emerites Stadium", city:"Londob", id: 2 },
    { name: "Burnley", stadium: "Turf Moor", city: "Burnley", id: 3 }
    ];

    var deferred = $q.defer();

    var intervalID = setInterval(function () {

        clearInterval(intervalID);
        deferred.resolve(stadiumData);

    }, 3000)

    return deferred.promise;
}

function getSoccerLeagues() {

    var leagues = [{ name: "Bundesliga" , id: 1 },
    { name: "Premier League", id: 2 }    
    ];

    var deferred = $q.defer();

    var intervalID = setInterval(function () {

        clearInterval(intervalID);
        deferred.resolve(leagues);

    }, 2000)

    return deferred.promise;
}


function getSoccerLeagueTeams(leagueId) {

    var teamInfo;
    
    if (leagueId == 1)
        teamInfo = getBundesligaTeams();
    else 
        teamInfo = getPremiershipTeams();

        console.log('teamInfo is', teamInfo);

    var deferred = $q.defer();

    var intervalID = setInterval(function () {

        clearInterval(intervalID);
        deferred.resolve(teamInfo);

    }, 2000)

    return deferred.promise;
}





return {
    getPlanets:getPlanets,
    getRockyPlanets: getRockyPlanets,
    getAstronautInfo:getAstronautInfo,
    getAstronautDetail:getAstronautDetail,
    getLeagues:getLeagues,
    getTeams:getTeams,
   // getFootballTeams:getFootballTeams,
    getFootballConferences:getFootballConferences,
    getNationalFootballTeams:getNationalFootballTeams,
    getAmericanFootballTeams:getAmericanFootballTeams,
    getTerribleFootballTeams:getTerribleFootballTeams,
  //  getBundesligaTeams:getBundesligaTeams,
   // getPremiershipTeams:getPremiershipTeams,
    getBundesligaInfo:getBundesligaInfo,
    getPremiershipInfo:getPremiershipInfo,
    getSoccerLeagues:getSoccerLeagues,
    getSoccerLeagueTeams:getSoccerLeagueTeams



}

}]);