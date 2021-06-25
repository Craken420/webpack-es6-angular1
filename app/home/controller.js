export default class HomeCtrl {
    constructor ($scope, HomeService) {
        'ngInject';
        this.greet = HomeService.getGreet();
        $scope.header = HomeService.getHeader();
    }
}
