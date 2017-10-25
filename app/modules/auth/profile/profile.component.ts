import { IComponentOptions } from 'angular';
import { AuthService } from '../../../services/auth.service';

class Controller {
    constructor(private authService: AuthService) { }
    static readonly $inject: string[] = [AuthService.serviceName];

    public profileForm: any;
    public editMode: boolean = false;

    toggleEdit() {
        this.editMode = !this.editMode;
    }

    updateProfile() {
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