angular.module('app.auth').controller('LoginController', LoginController);

function LoginController($window, $http, $state) {
    var vm = this;

    /**
     * Usuário
     */
    vm.user = {
        name: '',
        password: ''
    };

    /**
     * Login do Usuário
     */
    vm.login = login;
    function login(user) {

        $http({
            url: 'http://192.168.33.50:3000/api/v1/users/login',
            method: 'POST',
            data: {'email': user.email, 'password': user.password},
        }).then(function (response) {
            if (response.data.success) {
                localStorage.setItem('token', response.data.token);
                return $state.go('dashboard');
            }

        }, function (error) {
            $window.Materialize.toast(error.data.message, 3000);
        });

    }

}
LoginController.$inject = ['$window', '$http', '$state'];