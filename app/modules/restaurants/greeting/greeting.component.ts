class GreetingCtrl {
    consturctor() { }
}

export default {
    controller: GreetingCtrl,
    template: <string>require('./greeting.component.html')
}