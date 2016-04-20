'use strict';

angular.module('openolitor').directive('ooAbosDetail', [
  function() {
    return {
      restrict: 'E',
      replace: true,
      scope: {
        kundeId: '=',
        aboId: '='
      },
      transclude: true,
      templateUrl: 'scripts/abos/detail/abosdetail.html',
      controller: 'AbosDetailController'
    };
  }
]);
