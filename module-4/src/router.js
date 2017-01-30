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
        .state('items', {
            url: '/items/{itemId}',
            templateUrl: 'templates/routes/items.html',
            controller: 'ItemsController as itms',
            params: {
                itemId: null
            },
            resolve: {
                detail: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService, items) {
                    return MenuDataService.getItemsForCategory($stateParams.itemId);
                }]
            }
        });
}

})();
