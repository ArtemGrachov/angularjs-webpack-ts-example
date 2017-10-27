import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';
import { IStateService } from 'angular-ui-router';

class Controller {
    constructor(private authService: AuthService, private $state: IStateService) { }
    public static readonly $inject: string[] = [AuthService.name, '$state'];
    private authObs: any;
    $onInit() {
        this.authObs = this.authService
            .auth
            .onAuthStateChanged((user: any) => {
                if (!user) {
                    this.$state.go('auth');
                }
            })
    }
    $onDestroy() {
        this.authObs();
    }
}

export const AdminComponent: IComponentOptions = {
    controller: Controller,
    template: require('./admin.component.html')
}