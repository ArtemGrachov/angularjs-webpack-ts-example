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

    public listObs: any;
    public list: any[];
    public cols: { text: string, val: string }[];

    $onInit() {
        switch (this.$state.params.list) {
            case 'dishes':
                this.dishesLoader();
                break;
            case 'restaurants':
                this.restaurantsLoader();
                break;
            case 'orders':
                this.ordersLoader();
                break;
            case 'feedbacks':
                this.feedbacksLoader();
                break;
        }
    }

    $onDestroy() {
        if (this.listObs) {
            this.listObs.off();
        }
    }

    dishesLoader() {
        this.listObs = this.dishesService.getDishes();
        this.listObs.on('value', (res: any) => {
            this.cols = [
                { text: 'Name', val: 'name' },
                { text: 'Category', val: 'category' },
                { text: 'Price', val: 'price' },
                { text: 'Ingredients', val: 'ingredients' },
                { text: 'Date', val: 'date' }
            ]
            this.list = res.val();
            for (let i in this.list) {
                this.list[i]
                    .ingredients = this.list[i]
                        .ingredients
                        .join(', ')
                if (this.list[i].category) {
                    const catObs = this.dishesService
                        .getCategory(this.list[i].category);
                    catObs.once('value')
                        .then((res: any) => {
                            this.$scope.$apply(() => {
                                this.list[i].category = res.val();
                            });
                        })
                }
                this.list[i].price = '$' + this.list[i].price;
            }
            this.$scope.$apply();
        })
    }

    restaurantsLoader() {
        this.listObs = this.restaurantsService.getRestaurants();
        this.listObs.on('value', (res: any) => {
            this.cols = [
                { text: 'Address', val: 'address' },
                { text: 'Phone', val: 'phone' }
            ]
            this.list = res.val();
            this.$scope.$apply();
        })
    }

    ordersLoader() {
        this.listObs = this.ordersService.getOrders();
        this.listObs.on('value', (res: any) => {
            this.cols = [
                { text: 'Name', val: 'name' },
                { text: 'Address', val: 'address' },
                { text: 'Phone', val: 'phone' },
                { text: 'Dishes', val: 'dishes' }
            ]
            this.list = res.val();
            this.$scope.$apply();
        })
    }

    feedbacksLoader() {
        this.listObs = this.feedbackService.getFeedbacks();
        this.listObs.on('value', (res: any) => {
            this.cols = [
                { text: 'Name', val: 'name' },
                { text: 'Email', val: 'email' },
                { text: 'Phone', val: 'phone' },
                { text: 'Message', val: 'message' }
            ]
            this.list = res.val();
            for (let i in this.list) {
                if (this.list[i].message.length > 20) {
                    this.list[i].message = this.list[i].message.slice(0, 20) + '...'
                }
            }
            this.$scope.$apply();
        })
    }
}

export const AdminListComponent: IComponentOptions = {
    controller: Controller,
    template: require('./list.component.html')
}