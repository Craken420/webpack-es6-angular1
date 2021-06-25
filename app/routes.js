export default function routing ($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
        url: '/',
        template: '<h1 class="main">{{header}}</h1>',
        controller: function($scope) {
            'ngInject';
            $scope.header = 'Header application';
        },
        controllerAs: 'Ctrl'
    })
    $urlRouterProvider.otherwise('/');
}