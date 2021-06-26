import './style.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './routes';
import Components from './components'

if (module.hot) { // Indicar el uso HotModuleReplacement
    module.hot.accept();
}

angular.module('app', [uirouter, routing, Components])
.config(function ($locationProvider){
    'ngInject';
    $locationProvider.html5Mode(true);
})
