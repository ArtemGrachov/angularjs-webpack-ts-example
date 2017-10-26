import * as firebase from 'firebase';
import { IRootScopeService } from 'angular';

export class AuthService {
    constructor(private $rootScope: IRootScopeService) {
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
                }
            })
    };
    static readonly $inject: string[] = ['$rootScope'];
    private fire: any = firebase;
    public static readonly serviceName: string = 'AuthService';
    private auth: any = this.fire.auth();
    public user: any;
    public userId: string;

    login(userForm: any) {
        return this.auth
            .signInWithEmailAndPassword(userForm.email, userForm.password)

    }

    logout() {
        this.auth.signOut();
    }

    reg(regForm: any) {
        this.auth
            .createUserWithEmailAndPassword(regForm.email, regForm.password)
            .then((res: any) => {
                delete regForm.password;
                delete regForm.email;
                regForm.role = 'user';
                this.createUserData(res.uid, regForm);
            })
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
            .ref('users/' + userId)
            .update(userData)
    }

    getUserData(userId: string): any {
        this.fire
            .database()
            .ref('users/' + userId)
            .on('value', (res: any) => {
                this.user = res.val();
            })
    }
}