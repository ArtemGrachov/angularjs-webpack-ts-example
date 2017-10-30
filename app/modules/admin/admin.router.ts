import { IStateProvider, IUrlRouterProvider, IStateService } from 'angular-ui-router'
import { AuthService } from '../../services/auth.service';

export const AdminRouter = ['$stateProvider', '$urlRouterProvider', function ($stateProvider: IStateProvider, $urlRouterProvider: IUrlRouterProvider) {
    $stateProvider
        .state('admin-list', {
            url: '/:list',
            parent: 'admin',
            component: 'appAdminList'
        })
        .state('admin-details', {
            url: '/:list/:id',
            parent: 'admin',
            component: 'appAdminDetails'
        })
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

    // $urlRouterProvider.when('admin', '/admin/dishes')
}]