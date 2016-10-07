angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];
function AlbumsShowController (  $http,   $routeParams  ) {
  var vm = this;
  console.log($routeParams.id);
  var albumId = $routeParams.id;

  $http({
    method: 'GET',
    url: '/api/albums/' + $routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  });
}
