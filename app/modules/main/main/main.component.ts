class MainCtrl {
    constructor() { }
    testMethod() {
        console.log('test method!');
    }
    $onInit() {
        console.log('MainCtrl $onInit');
        this.testMethod();
    }
}

export default {
    controller: MainCtrl,
    template: <string>require('./main.component.html')
}