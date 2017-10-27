import { IComponentOptions, IScope } from 'angular';
import { StateParams } from '@uirouter/angularjs';
import { DataService } from '../../../services/data.service';

class Controller {
    constructor(private $scope: IScope, private stateParams: StateParams, private dataService: DataService) { }
    public static readonly $inject: string[] = ['$scope', '$stateParams', DataService.serviceName];
    public params: any;
    public dataObs: any;
    public data: any;

    private serviceGet: any;
    private serviceSend: any;

    $onInit() {
        this.serviceSend = this.params.serviceSend;
        if (this.params.serviceGet) {
            console.log(this.params.serviceGet)
            this.serviceGet = this.params.serviceGet;
            this.dataObs = this.serviceGet(this.stateParams.id);
            this.dataObs.on('value', (res: any) => {
                this.data = res.val();
                // ???
                this.$scope.$apply();
                // ???
            })
        } else {
            this.data = this.params.data;
        }
    }

    $onDestroy() {
        if (this.params.serviceGet) {
            this.dataObs.off();
        }
    }

    submit() {
        if (this.params.serviceGet) {
            this.data.description = 'updated with edit cmp';
            // ???
            this.dataObs.off();
            // ???
            console.log(this.data)
            this.serviceSend(this.stateParams.id, this.data);
        } else {
            console.log(this.data)
            this.serviceSend(this.data);
        }
    }
}

const bindings = {
    params: '='
}

export const AdminEditComponent: IComponentOptions = {
    controller: Controller,
    template: require('./edit.component.html'),
    bindings: bindings
}