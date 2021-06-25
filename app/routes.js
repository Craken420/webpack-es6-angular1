import HomeCtrl from './controller'

export default function routing ($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
        url: '/',
        template: '<h1 class="main">{{header}}</h1><h2>{{Ctrl.greet}}</h2>',
        controller: HomeCtrl,
        controllerAs: 'Ctrl'
    })
    $urlRouterProvider.otherwise('/');
}