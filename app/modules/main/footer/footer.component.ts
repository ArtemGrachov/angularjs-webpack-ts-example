import './footer.component.scss';

class FooterCtrl {
    constructor() {
    }
    $onInit() {
        console.log('footer $onInit')
    }
    $onDestroy() {
        console.log('footer $onDestroy')
    }
}

export default {
    controller: FooterCtrl,
    template: <string>require('./footer.component.html')
}