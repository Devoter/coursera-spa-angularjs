/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['items'];
function CategoriesController(items) {
    this.items = items;
}

})();