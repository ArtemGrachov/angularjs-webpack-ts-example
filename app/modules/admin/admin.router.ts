import { IStateProvider, IUrlRouterProvider, IStateService } from 'angular-ui-router'
import { AuthService } from '../../services/auth.service';

export const AdminRouter = ['$stateProvider', '$urlRouterProvider', function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('admin', {
            url: '/admin',
            component: 'appAdmin',
            resolve: {
                checkAuth: [AuthService.serviceName, '$state', function (authService: AuthService, $state: IStateService) {
                    return new Promise((res: any, rej: any) => {
                        if (authService.user && authService.user.role == 'admin') {
                            res();
                        } else {
                            rej();
                        }
                    })
                        .catch((err: any) => $state.go('auth'))
                }]
            }
        })
        .state('admin-dishes', {
            url: '/dishes',
            parent: 'admin',
            component: 'appAdminDishes'
        })
        .state('admin-dish', {
            url: '/dishes/:id',
            parent: 'admin',
            component: 'appAdminDish'
        })
    // $urlRouterProvider.when('admin', '/admin/dishes')
}]