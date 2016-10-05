/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

 angular
   .module('tunely', [])
   .controller('AlbumsIndexController', AlbumsIndexController);

/***************
 * CONTROLLERS *
 ***************/

// Inject $http service in the controller
AlbumsIndexController.$inject = ['$http'];

function AlbumsIndexController($http) {
  var vm = this;
  vm.albums = [];
  vm.newAlbum = {};

  vm.newAlbum = {
    name: '',
    artistName: '',
    releaseDate: '',
    genres: []
  };

  // DISPLAY ALL ALBUMS
  $http({
    method: 'GET',
    url: '/api/albums'
  }).then(function successCallback(response) {
    vm.albums = response.data; // display albums as response
  }, function errorCallback(response) {
    console.log("There was an error getting the data", response);
  });

  // CREATE ALBUM
  vm.createAlbum = function() {
    $http({
      method: "POST",
      url: "/api/albums",
      data: vm.newAlbum
    }).then(function successCallback(response) {
      vm.newAlbum = response.data; // response data is the new album
      vm.albums.push(vm.newAlbum); // add response data to albums array
    }, function errorCallback(response) {
      console.log("There was an error posting the data", response);
    });
  }
}
