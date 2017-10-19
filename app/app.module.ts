import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as angular from 'angular';

import { MainModule } from './modules/main/main.module';

angular.module('app', [MainModule.name])