var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html'
        })
        .when('/clublist', {
            templateUrl: 'views/clubList.html',
            controller: 'myCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
}])



myApp.controller('myCtrl', ["$scope", function($scope) {
    $scope.text = 'Big Clubs in Premier League'

    $scope.removeClub = (club) => {
        var removedClubId = $scope.clubs.indexOf(club)

        $scope.clubs.splice(removedClubId, 1)
    }

    $scope.addClub = () => {
        $scope.clubs.push({
            name: $scope.newClub.name,
            rank: +$scope.newClub.rank,
            ucl: true
        })
        
        // reset the input become blank after submit
        $scope.newClub.name = ''
        $scope.newClub.rank = ''
    }

    $scope.clubs = [
        {
            name: 'Man Utd',
            rank: 5,
            ucl: false
        },
        {
            name: 'Arsenal',
            rank: 1,
            ucl: false
        },
        {
            name: 'Man City',
            rank: 2,
            ucl: true
        },
        {
            name: 'Chelsea',
            rank: 3,
            ucl: true
        },
        {
            name: 'Liverpool',
            rank: 8,
            ucl: true
        }
    ]
}])





// myApp.config(function(){
//     // this function will run before the app start running
// })

// myApp.run(function(){
//     // this function will run when the app start running
// })