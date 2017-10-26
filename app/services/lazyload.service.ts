import { ILazyLoad } from 'oclazyload';

export class LazyLoadService {
    constructor(private $ocLazyLoad: ILazyLoad) { }
    public static readonly serviceName: string = 'LazyLoadService';
    public static readonly $inject: string[] = ['$ocLazyLoad'];

    loadAdmin() {
        console.log('loading admin module');
        this.$ocLazyLoad.load('./admin.bundle.js');
    }
}