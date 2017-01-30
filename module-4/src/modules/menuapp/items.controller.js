/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['detail'];
function ItemsController(detail) {
    this.items = detail;
}

})();
