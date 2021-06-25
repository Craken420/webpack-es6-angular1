import './style.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routes';

if (module.hot) { // Indicar el uso HotModuleReplacement
    module.hot.accept();
}

angular.module('app', [uirouter, routing])
.config(function ($locationProvider){
    'ngInject';
    $locationProvider.html5Mode(true);
})
