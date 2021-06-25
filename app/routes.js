routing.$inject = ['$urlRouterProvider', '$stateProvider'];
export default function routing ($urlRouterProvider, $stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        template: '<h1 class="main">{{Ctrl.header}}</h1>',
        controller: function() {
           this.header = 'Header application';
        },
        controllerAs: 'Ctrl'
    })
    $urlRouterProvider.otherwise('/');
}