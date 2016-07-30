angular.module('app.home').controller('HomeController', HomeController);

function HomeController($http, $location) {
    var vm = this;

    vm.page = 'Home';

    vm.req = req;

    function req() {
        $http.get('http://192.168.33.50:3000/api/v1/secret').then(function (response) {
            console.log(response.data);
        });
    }
}
HomeController.$inject = ['$http', '$location'];