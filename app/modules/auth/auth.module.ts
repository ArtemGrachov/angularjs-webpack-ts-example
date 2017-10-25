import * as angular from 'angular';
import { IModule } from 'angular';

import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthRouter } from './auth.router';

export const AuthModule: IModule = angular.module('', [])
    .component('appAuth', AuthComponent)
    .component('appLogin', LoginComponent)
    .component('appReg', RegComponent)
    .component('appProfile', ProfileComponent)
    .config(AuthRouter)