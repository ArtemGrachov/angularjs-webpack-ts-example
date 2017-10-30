import { DishesService } from '../../../../services/dishes.service'

export const DishesRowDirective = [DishesService.serviceName, function (dishesService: DishesService) {
    return {
        restrict: 'A',
        scope: {
            dish: '=dishesRow',
            id: '=dishId'
        },
        template: require('./dishes-row.directive.html'),
        link: function ($scope: any) {
            if ($scope.dish.category) {
                const categoryObs = dishesService.getCategory($scope.dish.category)
                categoryObs.on('value', (res: any) => {
                    $scope.categoryName = res.val();
                    categoryObs.off();
                    $scope.$apply();
                })
            } else {
                $scope.categoryName = '-'
            }
        }
    }
}]