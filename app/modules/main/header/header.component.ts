import './header.component.scss';

class HeaderCtrl {
    constructor() { }
    $onInit() {
        console.log('header $onInit')
    }
    $onDestroy() {
        console.log('footer $onDestroy')
    }
}

export default {
    controller: HeaderCtrl,
    template: <string>require('./header.component.html')
}