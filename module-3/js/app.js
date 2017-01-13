/* jshint esversion: 6 */

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  let foundItems = [];

  this.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json'
    })
    .then(function (result) {
      foundItems = [];
      console.log(result);
      result.data.menu_items.forEach((item) => {
        if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
          foundItems.push(item);
        }
      });

      return foundItems;
    });
  };

  this.removeItem = function (index) {
    foundItems.splice(index, 1);
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  this.text = '';
  this.found = [];
  this.search = () => {
    MenuSearchService.getMatchedMenuItems(this.text)
    .then((items) => this.found = items)
    .catch((reason) => {
      console.error(`Cannot load menu items, reason: ${reason}`);
    });
  };

  this.onRemove = MenuSearchService.removeItem;
}

function FoundItemsDirective() {
  let ddo = {
    restrict: 'E',
    templateUrl: 'snippets/found-items.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: function () {},
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

})();
