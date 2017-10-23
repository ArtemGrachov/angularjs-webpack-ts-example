import { IHttpPromise, IHttpService, IPromise } from 'angular';

import * as firebase from 'firebase';

export interface IDataService {
    get(url: string, auth: boolean): any,
    post(url: string, data: any, auth: boolean): Promise<any>,
    update(url: string, data: any, auth: boolean): Promise<any>,
    remove(url: string, auth: boolean): Promise<any>
}

export class DataService implements IDataService {
    public static readonly serviceName: string = 'DataService';
    public static readonly $inject: string[] = ['$http'];

    constructor(private $http: IHttpService, private fire: any = firebase) {
        this.fire.initializeApp({
            apiKey: "AIzaSyBejaVDaYDTmIEkdYHWQfnd0cexSWu432A",
            authDomain: "angular-restaurant.firebaseapp.com",
            databaseURL: "https://angular-restaurant.firebaseio.com",
            projectId: "angular-restaurant",
            storageBucket: "angular-restaurant.appspot.com",
            messagingSenderId: "89575301309"
        })
    }

    get(url: string, auth: boolean) {
        return this.fire.database().ref(url);
    }

    post(url: string, data: any, auth: boolean): Promise<any> {
        return this.fire.database().ref(url).push(data)
    }

    update(url: string, data: any, auth: boolean): Promise<any> {
        return this.fire.database().ref(url).update(data)
    }

    remove(url: string, auth: boolean): Promise<any> {
        return this.fire.database().ref(url).remove();
    }
}