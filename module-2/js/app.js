/* jshint esversion: 6 */

(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getToByItems;
    this.buyItem = ShoppingListCheckOffService.buyItem;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    this.items = ShoppingListCheckOffService.getBoughtItems;
}

function ShoppingListCheckOffService() {
    let toBuyItems = [
        {
            name: 'cookies',
            quantity: 10
        },
        {
            name: 'cakes',
            quantity: 5
        },
        {
            name: 'lemon juices',
            quantity: 7
        },
        {
            name: 'hamburgers',
            quantity: 2
        },
        {
            name: 'rabbits',
            quantity: 4
        }
    ];
    let boughtItems = [];

    this.getToByItems = function () {
        return toBuyItems;
    };

    this.buyItem = function (index) {
        boughtItems.push(toBuyItems[index]);
        toBuyItems.splice(index, 1);
    };

    this.getBoughtItems = function () {
        return boughtItems;
    };
}

})();
