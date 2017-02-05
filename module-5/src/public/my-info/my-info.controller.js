/* esversion: 6 */
(function () {
'use strict';

angular.module('public').controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
    this.info = MyInfoService.info;
}

})();
