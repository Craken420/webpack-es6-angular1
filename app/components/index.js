import angular from 'angular';
import uirouter from 'angular-ui-router'

import homeComponenent from './home/home-component.js';
import routes from './routes';
import ComponentsService from './service'

export default angular.module('app.components', [uirouter])
.config(routes)
.component('home', homeComponenent)
.service('ComponentsService', ComponentsService)
.name;