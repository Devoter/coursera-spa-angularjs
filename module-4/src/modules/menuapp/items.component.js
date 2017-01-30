/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
    templateUrl: 'templates/modules/menuapp/components/items.html',
    bindings: {
        items: '<'
    }
});
})();
