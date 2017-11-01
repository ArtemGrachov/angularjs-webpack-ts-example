import { IDirective } from 'angular';
import { DishesService } from '../../../../services/dishes.service';

export const DishesItem = [DishesService.serviceName, function (dishesService: DishesService) {
    const directive: IDirective = {
        restrict: 'A',
        scope: {
            dish: '=dishesItem',
            id: "=id",
            index: "=index"
        },
        template: require('./item.directive.html'),
        link: function ($scope: any) {
            if ($scope.dish.category) {
                dishesService.getCategory($scope.dish.category)
                    .once('value')
                    .then((res: any) => {
                        $scope.categoryName = res.val();
                        $scope.$apply();
                    })
            }
            else {
                $scope.dish.categoryName = '-'
            }
        }
    }
    return directive;
}]