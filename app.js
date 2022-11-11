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



myApp.controller('myCtrl', ["$scope", "$http", function($scope, $http) {
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

    $http.get('data/clubData.json').then((response) => {
        $scope.clubs = response.data
    })
}])





// myApp.config(function(){
//     // this function will run before the app start running
// })

// myApp.run(function(){
//     // this function will run when the app start running
// })