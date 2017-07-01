app.directive('game', function() {
    return {
        restrict: 'E',
        scope: {
            // Lets the directive accept data from the view with <game info=" ... "></game>, where the ellipsis is a variable or object from the view. The data we pass in then gets merged into the templateUrl through the variable info. For more on directives: https://docs.angularjs.org/guide/directive
            info: "=",
        },
        templateUrl: 'js/directives/game.html'
    };

});
