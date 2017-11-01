import { IDirective } from 'angular';

export const IngredientsDirective = function () {
    const ctrl = function (this: any) {
        this.add = function () {
            this.ngModel.push(this.new);
            this.ngModelCtrl.$setDirty();
        }
        this.remove = function (index: number) {
            this.ngModel.splice(index, 1);
            this.ngModelCtrl.$setDirty();
        }
    };

    const dir: IDirective = {
        require: { ngModelCtrl: 'ngModel' },
        restrict: 'E',
        scope: {
            ngModel: '='
        },
        bindToController: true,
        template: require('./ingredients.directive.html'),
        controller: ctrl,
        controllerAs: 'dir'
    }
    return dir;
}