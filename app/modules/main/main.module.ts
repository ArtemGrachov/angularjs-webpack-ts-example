import * as angular from 'angular';
import MainComponent from './main/main.component';

export const MainModule = angular.module('mainModule', [])
    // .component('appMain', {
    //     controller: function () {
    //         console.log('hello main cmp!')
    //     },
    //     template: require('./main/main.component.html')
    // })
    .component('appMain', MainComponent)