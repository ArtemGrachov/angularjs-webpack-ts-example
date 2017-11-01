import { IDirective } from 'angular';

export const CategoryDirective = function () {
    const ctrl = function (this: any, $element: any) {
        this.select = function (id: string) {
            this.ngModel = id;
            this.ngModelCtrl.$setDirty();
            $element.children().removeClass('open')
        }
        this.toggle = function () {
            $element.children().toggleClass('open')
        }
    }
    const dir: IDirective = {
        require: { ngModelCtrl: 'ngModel' },
        restrict: 'E',
        scope: {
            ngModel: '=',
            categories: '=categories'
        },
        bindToController: true,
        template: require('./category.directive.html'),
        controller: ctrl,
        controllerAs: 'dir'
    }
    return dir;
}