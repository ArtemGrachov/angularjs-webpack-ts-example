import * as firebase from 'firebase';
import { IRootScopeService } from 'angular';
import { LazyLoadService } from './lazyload.service';

export class AuthService {
    public static readonly $inject: string[] = ['$rootScope', LazyLoadService.serviceName];
    public static readonly serviceName: string = 'AuthService';
    constructor(private $rootScope: IRootScopeService, private lazyLoadService: LazyLoadService) {
        this.auth
            .onAuthStateChanged((user: any) => {
                if (user) {
                    this.userId = user.uid;
                    this.fire
                        .database()
                        .ref('users/' + user.uid)
                        .on('value', () => this.getUserData(user.uid))
                } else {
                    this.user = null;
                    this.$rootScope.$apply();
                }
            })
    };
    private fire: any = firebase;
    public auth: any = this.fire.auth();
    public user: any;
    public userId: string;

    public login(userForm: any) {
        return this.auth
            .signInWithEmailAndPassword(userForm.email, userForm.password)
    }

    public logout() {
        this.auth.signOut();
    }

    public reg(regForm: any) {
        this.auth
            .createUserWithEmailAndPassword(regForm.email, regForm.password)
            .then((res: any) => {
                delete regForm.password;
                delete regForm.email;
                regForm.role = 'user';
                this.createUserData(res.uid, regForm);
            })
    }

    public createUserData(userId: string, userData: any) {
        this.fire
            .database()
            .ref('users/' + userId)
            .set(userData)
    }

    public updateUserData(userId: string, userData: any): void {
        this.fire
            .database()
            .ref('users/' + userId)
            .update(userData)
    }

    public getUserData(userId: string): any {
        this.fire
            .database()
            .ref('users/' + userId)
            .on('value', (res: any) => {
                this.user = res.val();
                if (this.user.role == 'admin') {
                    this.lazyLoadService.loadAdmin();
                }
                this.$rootScope.$apply();
            })
    }
}