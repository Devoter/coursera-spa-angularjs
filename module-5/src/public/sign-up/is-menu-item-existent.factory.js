/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('public').factory('isMenuItemExistent', isMenuItemExistent);

isMenuItemExistent.$inject = ['$http', 'ApiPath', 'MenuService', 'MyInfoService'];
function isMenuItemExistent($http, ApiPath, MenuService, MyInfoService) {
    return function (shortName) {
        return MenuService.getMenuItem(shortName);
    };
}

})();
