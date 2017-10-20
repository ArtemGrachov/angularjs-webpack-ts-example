import { IHttpService } from 'angular';

export const DataService = class dataService {
    constructor(private $http: IHttpService) {

    }

    testMethod() {
        console.log('test dataService method')
    }
}