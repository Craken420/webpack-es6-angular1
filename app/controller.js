export default class HomeCtrl {
    constructor ($scope) {
        'ngInject';
        this.greet = 'Hi, Welcome';
        $scope.header = 'Header application';
    }
}
