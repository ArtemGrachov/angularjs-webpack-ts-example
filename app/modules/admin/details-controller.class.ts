import { IScope } from 'angular';
import { IState } from 'angular-ui-router';

export class DetailsController {
    constructor(protected $scope: IScope, protected $state: IState, protected dataManage: any) {
    }
    public data: any;
    private edit: boolean = false;
    private detailsForm: any;
    protected dataObs: any;

    $onInit() {
        this.loaderInit();
    }

    $onDestroy() {
        this.loaderUnsub();
    }


    loaderInit() {
        this.dataObs = this.dataManage.getDish(this.$state.params.id)
        this.dataObs
            .on('value', (res: any) => {
                this.data = res.val();
                this.$scope.$apply();
            })
    }

    loaderUnsub() {
        this.dataObs.off();
    }

    getUpdated(form: any) {
        let updated: any = {};
        for (let control of form.$$controls) {
            if (control.$dirty && control.$name) {
                updated[control.$name] = control.$modelValue;
            }
        }
        return updated;
    }

    toggleEdit() {
        this.edit = !this.edit;
    }

    submit() {
        this.dataManage.updateDish(
            this.$state.params.id,
            this.getUpdated(this.detailsForm)
        )
    }
}