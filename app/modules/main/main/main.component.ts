import { IComponentOptions } from 'angular';
class Controller {
}

export const MainComponent: IComponentOptions = {
    controller: Controller,
    template: <string>require('./main.component.html')
}