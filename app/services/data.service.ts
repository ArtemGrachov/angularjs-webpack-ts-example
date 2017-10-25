import { IHttpPromise, IHttpService, IPromise } from 'angular';

import * as firebase from 'firebase';

export class DataService {
    public static readonly serviceName: string = 'DataService';
    public static readonly $inject: string[] = ['$http'];

    constructor(private $http: IHttpService, private fire: any = firebase) { }

    get(url: string) {
        return this.fire.database().ref(url);
    }

    post(url: string, data: any): Promise<any> {
        return this.fire.database().ref(url).push(data)
    }

    update(url: string, data: any): Promise<any> {
        return this.fire.database().ref(url).update(data)
    }

    remove(url: string): Promise<any> {
        return this.fire.database().ref(url).remove();
    }
}