import angular from 'angular';
import HomeCtrl from './controller';
import homeRoutes from './routes';
import uirouter from 'angular-ui-router'

export default angular.module('app.home', [uirouter])
.config(homeRoutes)
.controller('HomeCtrl', HomeCtrl)
.name;