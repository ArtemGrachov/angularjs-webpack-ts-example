import { IComponentOptions } from 'angular';

class Controller {
    $onInit() {
        console.log('admin dishes component init')
    }
}

export const AdminDishesComponent: IComponentOptions = {
    controller: Controller,
    template: require('./dishes.component.html')
}