/* esversion: 6 */
(function () {
'use strict';

angular.module('common').service('MyInfoService', MyInfoService);

function MyInfoService() {
    this.info = {
        firstName: null,
        lastName: null,
        eMail: null,
        phoneNumber: null,
        shortName: null
    };
}

})();
