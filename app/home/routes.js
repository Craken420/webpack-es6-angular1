export default function routing ($stateProvider) {
    'ngInject';
    $stateProvider.state('home', {
        url: '/',
        template: require('./home.html').default,
        controller: 'HomeCtrl',
        controllerAs: 'Ctrl'
    })
}