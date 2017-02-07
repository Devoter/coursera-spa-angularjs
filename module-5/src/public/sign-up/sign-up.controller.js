/* jshint esversion: 6 */
(function () {
'use strict';

angular.module('public').controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService', 'MenuService'];
function SignUpController(MyInfoService, MenuService) {
    this.info = {
        firstName: null,
        lastName: null,
        eMail: null,
        phoneNumber: null,
        shortName: null
    };
    this.informationSaved = false;
    this.submit = function () {
        MenuService.getMenuItem(this.info.shortName).then(item => {
            MyInfoService.info = this.info;
            MyInfoService.info.item = item;
            this.informationSaved = true;
        }).catch(reason => this.informationSaved = false);
    };
}

})();
