import { IComponentOptions } from 'angular';
import './footer.component.scss';

class Controller {

}

export const FooterComponent: IComponentOptions = {
    controller: Controller,
    template: <string>require('./footer.component.html')
}