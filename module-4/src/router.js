/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('MenuApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/routes/home.html'
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'templates/routes/categories.html',
            controller: 'CategoriesController as cat',
            resolve: {
                items: ['MenuDataService', function (MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })
        .state('categories.items', {
            url: '/items/{itemId}',
            templateUrl: 'templates/routes/categories/items.html',
            controller: 'ItemsController as itms',
            params: {
                itemId: null
            },
            resolve: {
                detail: ['$stateParams', 'MenuDataService', 'items', function ($stateParams, MenuDataService, items) {
                    return MenuDataService.getItemsForCategory(items[$stateParams.itemId].short_name);
                }]
            }
        });
}

})();
