import './style.css';
import angular from 'angular';

if (module.hot) { // Indicar el uso HotModuleReplacement
    module.hot.accept();
}

angular.module('app', [])
.controller('Ctrl', function ($scope) {
    'ngInject';
    $scope.header = 'Header application'
})
