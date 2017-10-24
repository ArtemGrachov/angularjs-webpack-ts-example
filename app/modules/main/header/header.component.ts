import { IComponentOptions } from 'angular';
import './header.component.scss';

class controller {
    constructor() { }
}

export const HeaderComponent: IComponentOptions = {
    controller: controller,
    template: <string>require('./header.component.html')
}