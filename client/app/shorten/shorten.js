angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $http, $location, Links) {
  
  $scope.link = {};

  $scope.addLink = function() {
    var url = {};
    url.url = $scope.url;
    $http.post('/api/links',url ).success(function(data) {
      console.log('Successfully posted link! ', data);
    });
  };

});
