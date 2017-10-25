import { IComponentOptions, IRootScopeService } from 'angular';
import { IStateService } from 'angular-ui-router';
import { AuthService } from '../../../services/auth.service';

class Controller {
    constructor(private authService: AuthService, private $state: IStateService) { }
    static readonly $inject: string[] = [AuthService.serviceName, '$state'];
    public loginForm: any;

    login() {
        this.authService.login(this.loginForm).then(
            (res: any) => {
                console.log('login cmp')
                this.$state.go('profile')
            }
        );
    }
}

export const LoginComponent: IComponentOptions = {
    controller: Controller,
    template: require('./login.component.html')
}