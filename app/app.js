import './style.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routes';
import Home from './home'

if (module.hot) { // Indicar el uso HotModuleReplacement
    module.hot.accept();
}

angular.module('app', [uirouter, routing, Home])
.config(function ($locationProvider){
    'ngInject';
    $locationProvider.html5Mode(true);
})
