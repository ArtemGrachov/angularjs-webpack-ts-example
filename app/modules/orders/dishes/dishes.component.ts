class DishesCtrl {
    constructor(private dataService: any) { // there should be interface!
        this.dataService.testMethod();
    }
}

export default {
    controller: DishesCtrl,
    template: <string>require('./dishes.component.html')
}