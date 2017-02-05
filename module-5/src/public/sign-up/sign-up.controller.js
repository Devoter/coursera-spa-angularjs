/* esversion: 6 */
(function () {
'use strict';

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
    this.info = MyInfoService.info;
}

})();
