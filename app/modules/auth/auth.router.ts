import { IStateProvider, IUrlRouterProvider, IStateService } from 'angular-ui-router'
import { AuthService } from '../../services/auth.service';

export const AuthRouter = ['$stateProvider', '$urlRouterProvider', function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            component: 'appProfile',
            resolve: {
                checkAuth: [AuthService.serviceName, '$state', function (authService: AuthService, $state: IStateService) {
                    return new Promise((res: any, rej: any) => {
                        if (authService.auth.currentUser) {
                            res();
                        } else {
                            rej();
                        }
                    })
                        .catch((err: any) => $state.go('auth'))
                }]
            }
        })
        .state('auth', {
            url: '/auth',
            component: 'appAuth',
            resolve: {
                checkAuth: [AuthService.serviceName, '$state', function (authService: AuthService, $state: IStateService) {
                    return new Promise((res: any, rej: any) => {
                        if (!authService.user) {
                            res();
                        } else {
                            rej();
                        }
                    })
                        .catch((err: any) => $state.go('profile'))
                }]
            }
        })
}]