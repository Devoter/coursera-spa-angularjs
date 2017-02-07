/* esversion: 6 */
(function () {
'use strict';

angular.module('public').directive('menuItemShortName', menuItemShortName);

menuItemShortName.$inject = ['isMenuItemExistent'];
function menuItemShortName(isMenuItemExistent) {
    return {
        require: 'ngModel',
        link(scope, elm, attrs, ctrl) {
            ctrl.$asyncValidators.menuItemShortName = isMenuItemExistent;
        }
    };
}

})();
