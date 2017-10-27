import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';
import { IStateService } from 'angular-ui-router';

class Controller {
    constructor(private authService: AuthService, private $state: IStateService) { }
    static readonly $inject: string[] = [AuthService.serviceName, '$state'];
    private authObs: any;

    public profileForm: any;
    public editMode: boolean = false;

    public $onInit() {
        this.authObs = this.authService.auth.onAuthStateChanged((user: any) => {
            if (!user) {
                this.$state.go('auth');
            }
        })
    }
    public $onDestroy() {
        this.authObs();
    }

    public toggleEdit() {
        this.editMode = !this.editMode;
    }

    public updateProfile() {
        // test
        if (!this.profileForm) {
            this.profileForm = {}
        }
        this.profileForm.location = {
            lat: 0,
            lng: 0
        }
        // test
        console.log('Profile cmp object', this.profileForm);
        this.authService.updateUserData(this.authService.userId, this.profileForm)
    }
}

export const ProfileComponent: IComponentOptions = {
    controller: Controller,
    template: require('./profile.component.html')
}