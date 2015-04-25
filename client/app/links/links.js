angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  
  $scope.data = {};

  $scope.getLinks = function() {
    Links.fetchLinks().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();

});
