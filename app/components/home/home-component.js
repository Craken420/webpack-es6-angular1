class HomeCtrl {
    constructor ($scope) {
        'ngInject';
        $scope.content = 'This is the content of the home controller';
    }
}

module.exports = {
    template: require('./home.html').default,
    controller: HomeCtrl,
    bindings: {
        homegreets: '=',
        homemainsection: '='
    }
}
