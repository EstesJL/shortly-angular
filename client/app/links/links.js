angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links, Auth) {
  
  $scope.data = {};

  $scope.getLinks = function() {
    Links.fetchLinks().then(function(links) {
      $scope.data.links = links;
    });
  };
  $scope.getLinks();

  $scope.link = {};

  $scope.addLink = function() {
    $scope.addLink = function() {
      var url = {};
      url.url = $scope.url;
      $scope.url = '';
      Links.shortenLink(url).then(function() {
        Links.fetchLinks().then(function(links) {
          $scope.data.links = links;
        });
      });
      TweenMax.to(".titlecolor", 1, {"font-size": 20, delay: 0});
      TweenMax.to(".titlecolor", 1, {"font-size": 30, delay: 1});
    };
  };

  TweenMax.to(".titlecolor", 2, {"font-size": 20, delay: 2});
  TweenMax.to(".titlecolor", 1, {"font-size": 30, delay: 4});
  TweenMax.to(".titlecolor", 1, {y: "15", delay: 5});

  $scope.signout = function() {
    Auth.signout();
  };
});


// angular.module('shortly.links', [])

// .controller('LinksController', function ($scope, $http, Links) {
  
//   $scope.data = {};

//   $scope.getLinks = function() {
//     Links.fetchLinks().then(function(links) {
//       $scope.data.links = links;
//     });
//   };
//   $scope.getLinks();

// });
