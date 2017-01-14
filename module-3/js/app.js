/* jshint esversion: 6 */

(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.directive('loaderIndicator', LoaderIndicatorDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  let foundItems = [];

  this.getMatchedMenuItems = function (searchTerm) {
    let lowerCaseSearchTerm = searchTerm.toLowerCase();

    return $http({
      method: 'GET',
      url: ApiBasePath + '/menu_items.json'
    })
    .then(function (result) {
      foundItems = result.data.menu_items.filter((item) =>
        (item.description.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1) ||
        (item.name.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1) ||
        (item.short_name.toLowerCase().indexOf(lowerCaseSearchTerm) !== -1));

      return foundItems;
    });
  };

  this.removeItem = function (index) {
    foundItems.splice(index, 1);
  }
}

function LoaderIndicatorDirective() {
  return {
    restrict: 'E',
    templateUrl: 'snippets/loader-indicator.tpl.html'
  };
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  this.text = '';
  this.found = [];
  this.isLoaderVisible = false;
  this.searchError = false;
  this.search = () => {
    if (this.text === '') {
      this.searchError = true;
    }
    else {
      this.isLoaderVisible = true;
      MenuSearchService.getMatchedMenuItems(this.text)
      .then((items) => this.found = items)
      .catch((reason) => {
        console.error(`Cannot load menu items, reason: ${reason}`);
      })
      .finally(() => {
        this.isLoaderVisible = false;
        this.searchError = this.found.length === 0;
      });
    }
  };

  this.onRemove = MenuSearchService.removeItem;
}

function FoundItemsDirective() {
  return {
    restrict: 'E',
    templateUrl: 'snippets/found-items.tpl.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: function () {},
    controllerAs: 'list',
    bindToController: true,
    transclude: true
  };
}

})();
