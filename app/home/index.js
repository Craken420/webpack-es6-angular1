import angular from 'angular';
import uirouter from 'angular-ui-router'

import HomeCtrl from './controller';
import homeRoutes from './routes';
import HomeService from './service'

export default angular.module('app.home', [uirouter])
.config(homeRoutes)
.controller('HomeCtrl', HomeCtrl)
.service('HomeService', HomeService)
.name;