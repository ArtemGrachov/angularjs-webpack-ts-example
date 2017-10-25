import * as firebase from 'firebase';
import { IRootScopeService } from 'angular';

export class AuthService {
    constructor(private $rootScope: IRootScopeService) {
        this.auth
            .onAuthStateChanged((user: any) => {
                if (user) {
                    this.fire
                        .database()
                        .ref('users/' + user.uid)
                        .on('value', () => this.getUserData(user.uid))
                    console.log('auth state changed: login');
                } else {
                    this.user = null;
                    this.$rootScope.$apply();
                    console.log('auth state changed: logout')
                }
            })
    };
    static readonly $inject: string[] = ['$rootScope'];
    private fire: any = firebase;
    public static readonly serviceName: string = 'AuthService';
    private auth: any = this.fire.auth();
    public user: any;

    login(userForm: any) {
        console.log('auth service user form', userForm)
        return this.auth
            .signInWithEmailAndPassword(userForm.email, userForm.password)
            .then((res: any) => {
                console.log(res)
            })
            .catch((err: any) => {
                console.log(err)
            })
    }

    logout() {
        this.auth.signOut();
    }

    reg(regForm: any) {
        console.log('auth service reg form', regForm);
        this.auth
            .createUserWithEmailAndPassword(regForm.email, regForm.password)
            .then((res: any) => {
                delete regForm.password;
                delete regForm.email;
                regForm.role = 'user';
                this.createUserData(res.uid, regForm);
            })
            .catch((err: any) => console.log(err))
    }

    createUserData(userId: string, userData: any) {
        this.fire
            .database()
            .ref('users/' + userId)
            .set(userData)
    }

    updateUserData(userId: string, userData: any): void {
        this.fire
            .database()
            .ref('users')
            .update(userData)
    }

    getUserData(userId: string): any {
        this.fire
            .database()
            .ref('users/' + userId)
            .on('value', (res: any) => {
                console.log('userdata subscribe');
                console.log('userdata', res.val())
                this.user = res.val();
                this.$rootScope.$apply();
            })
    }
}