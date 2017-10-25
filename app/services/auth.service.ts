export class AuthService {
    public static readonly serviceName: string = 'AuthService';

    login(userForm: any) {
        console.log('auth service user form', userForm)
    }

    logout() {
        console.log('auth service logout')
    }

    reg(regForm: any) {
        console.log('auth service reg form', regForm)
    }
}