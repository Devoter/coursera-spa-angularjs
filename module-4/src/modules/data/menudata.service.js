/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
    this.getAllCategories = function () {
        return $http({
            method: 'GET',
            url: ApiBasePath + 'categories.json'
        }).then(response => response.data);
    };

    this.getItemsForCategory = function (categoryShortName) {
        return $http({
            method: 'GET',
            url: ApiBasePath + 'menu_items.json',
            params: {
                category: categoryShortName
            }
        }).then(response => response.data);
    };
}

})();
