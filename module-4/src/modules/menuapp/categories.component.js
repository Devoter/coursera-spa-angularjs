/* jshint esversion: 6 */
(function() {
'use strict';

angular.module('MenuApp')
.component('categories', {
    templateUrl: 'templates/modules/menuapp/components/categories.html',
    bindings: {
        items: '<'
    }
});

})();
