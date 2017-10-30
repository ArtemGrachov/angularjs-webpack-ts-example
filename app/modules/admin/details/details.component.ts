import { IComponentOptions, IScope } from 'angular';
import { IStateService } from 'angular-ui-router';

import { DishesService } from '../../../services/dishes.service';
import { RestaurantsService } from '../../../services/restaurants.service';
import { OrdersService } from '../../../services/orders.service';
import { FeedbackService } from '../../../services/feedback.service';

class Controller {
    constructor(
        private $scope: IScope,
        private $state: IStateService,
        private dishesService: DishesService,
        private restaurantsService: RestaurantsService,
        private ordersService: OrdersService,
        private feedbackService: FeedbackService
    ) { }
    public static readonly $inject: string[] = [
        '$scope',
        '$state',
        DishesService.serviceName,
        RestaurantsService.serviceName,
        OrdersService.serviceName,
        FeedbackService.serviceName
    ];

    public dataObs: any;
    public data: any;
    public labels: { text: string, val: string, select?: any }[];

    $onInit() {
        switch (this.$state.params.list) {
            case 'dishes':
                this.dishLoader();
                break;
            case 'restaurants':
                this.restaurantLoader();
                break;
            case 'orders':
                this.orderLoader();
                break;
            case 'feedbacks':
                this.feedbackLoader();
                break;
        }
    }

    $onDestroy() {
        if (this.dataObs) {
            this.dataObs.off();
        }
    }

    dishLoader() {
        this.labels = [
            { text: 'Name', val: 'name' },
            { text: 'Price', val: 'price' },
            { text: 'Category', val: 'category' },
            { text: 'Description', val: 'description' },
            { text: 'Ingredients', val: 'ingredients' }
        ];
        this.dataObs = this.dishesService.getDish(this.$state.params.id);
        this.dataObs.on('value', (res: any) => {
            this.data = res.val();
            this.dishesService
                .getCategory(this.data.category)
                .once('value').then((res: any) => {
                    this.data.categoryName
                })

            this.$scope.$apply();
        })
    }

    restaurantLoader() {

    }

    orderLoader() {

    }

    feedbackLoader() {

    }
}

export const AdminDetailsComponent: IComponentOptions = {
    controller: Controller,
    template: require('./details.component.html')
}