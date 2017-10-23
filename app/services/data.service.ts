import { IHttpPromise, IHttpService, IPromise } from 'angular';
import * as firebase from 'firebase';

export interface IDataService {
    test(): void
}

export class DataService {
    public static readonly serviceName: string = 'DataService';
    public static readonly $inject: string[] = ['$http'];

    constructor(private $http: IHttpService) {
        const fb: any = firebase;
        fb.initializeApp({
            apiKey: "AIzaSyBejaVDaYDTmIEkdYHWQfnd0cexSWu432A",
            authDomain: "angular-restaurant.firebaseapp.com",
            databaseURL: "https://angular-restaurant.firebaseio.com",
            projectId: "angular-restaurant",
            storageBucket: "angular-restaurant.appspot.com",
            messagingSenderId: "89575301309"
        })
    }

    test(fb: any = firebase) {
        fb.database().ref().push({ test: '12345' })
    }
}