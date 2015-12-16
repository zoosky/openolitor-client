'use strict';

/**
 */
angular.module('openolitor')
  .controller('DepotsDetailController', ['$scope', '$filter', '$routeParams', '$location', 'gettext', 'DepotsDetailModel', function($scope, $filter, $routeParams, $location, gettext, DepotsDetailModel) {

    var defaults = {
      model: {
        id: undefined,
        aktiv: true
      }
    };

    if (!$routeParams.id || $routeParams.id === 'new') {
      $scope.depot = new DepotsDetailModel(defaults.model);
    } else {
      DepotsDetailModel.get({
        id: $routeParams.id
      }, function(result) {
        $scope.depot = result;
      });
    }

    $scope.isExisting = function() {
      return angular.isDefined($scope.depot) && angular.isDefined($scope.depot.id);
    };

    $scope.save = function() {
      $scope.depot.$save(function(result) {
        if (!$scope.isExisting()) {
          $location.path('/depots/' + result.id);
        }
      });
    };

    $scope.cancel = function() {
      $location.path('/depots');
    };

    $scope.delete = function() {
      $scope.depot.$delete();
    };
  }]);
