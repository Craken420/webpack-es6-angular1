export default function routing ($stateProvider) {
    'ngInject';
    $stateProvider.state('components', {
        url: '/',
        template: require('./components.html').default,
        resolve: {
            serviceGreets: function (ComponentsService) {
                'ngInject';
                return ComponentsService.getGreet()
            },
            serviceMainSection: function (ComponentsService) {
                'ngInject';
                return ComponentsService.getMainSection()
            }
        }
    })
}