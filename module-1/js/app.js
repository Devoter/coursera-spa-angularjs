/* jshint esversion: 6 */

(function() {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.menu = '';
    $scope.message = '';
    $scope.state = '';

    $scope.checkIfTooMuch = function() {
        let menu = $scope.menu.split(',');
        let itemsCount = 0;

        menu.forEach((item) => {
            if (item.trim() !== '') {
                ++itemsCount;
            }
        });

        if (itemsCount) {
            $scope.message = itemsCount > 3 ? 'Too much!' : 'Enjoy!';
            $scope.state = 'alert-success';
        }
        else {
            $scope.message = 'Please enter data first';
            $scope.state = 'alert-danger';
        }
    };
}
})();
