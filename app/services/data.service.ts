import { IHttpPromise, IHttpService, IPromise } from 'angular';

export interface IDataService {
    get(url: string, auth: boolean): IHttpPromise<any>,
    delete(url: string, auth: boolean): Promise<any>,
    post(url: string, data: any, auth: boolean): Promise<any>
    put(url: string, data: any, auth: boolean): Promise<any>
}

export class DataService {
    public static readonly serviceName: string = 'DataService';
    public static readonly $inject: string[] = ['$http'];

    constructor(private $http: IHttpService) { }

    get(url: string, auth: boolean): IPromise<any> {
        return this.$http({
            method: 'GET',
            url: url
        })
            .then(res => res.data)
    }

}