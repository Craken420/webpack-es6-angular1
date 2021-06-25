import HomeCtrl from './controller'

export default function routing ($urlRouterProvider, $stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
        url: '/',
        template: require('./home.html').default,
        controller: HomeCtrl,
        controllerAs: 'Ctrl'
    })
    $urlRouterProvider.otherwise('/');
}