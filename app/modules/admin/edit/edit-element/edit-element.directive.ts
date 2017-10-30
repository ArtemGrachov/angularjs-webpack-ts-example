export const EditElementDirective = function () {
    const switchTemplate = function () {
        // console.log(el, attrs);
        return '<h4>test</h4>'
    }
    return {
        restrict: 'A',
        scope: {
            ke: '=ke',
            vl: '=vl'
        },
        template: switchTemplate(),
        link: function () {
            console.log('dir link fnc')
        }
    }
}