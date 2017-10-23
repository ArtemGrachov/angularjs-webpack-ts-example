import * as angular from 'angular';

import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const MainModule = angular.module('mainModule', [])
    .component('appMain', MainComponent)
    .component('appHeader', HeaderComponent)
    .component('appFooter', FooterComponent)