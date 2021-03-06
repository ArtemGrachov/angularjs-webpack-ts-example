import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';
import { IStateService } from 'angular-ui-router';

class Controller {
    constructor(private authService: AuthService, private $state: IStateService) { }
    static readonly $inject: string[] = [AuthService.serviceName, '$state'];
    private authObs: any;

    $onInit() {
        this.authObs = this.authService.auth
            .onAuthStateChanged((user: any) => {
                if (user) {
                    this.$state.go('profile');
                }
            })
    }
    $onDestroy() {
        this.authObs();
    }
}

export const AuthComponent: IComponentOptions = {
    controller: Controller,
    template: require('./auth.component.html')
}