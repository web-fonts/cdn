var app = angular.module('cdn', []);

app.controller('MainController', function($scope) {
    $scope.fonts = window.fonts;

    $scope.showDetails = function(item) {
        console.log(item);
    };

    $scope.selectText = function($event) {
        $event.target.select();
    }

});

app.filter('slug', function() {
    return function(input) {
        return input.toLowerCase().replace(/[^a-z_]/g, '-').replace(/_/g, '-');
    }
});