export class Dish {
    constructor(
        public name: string = 'New dish',
        public price: number = 0,
        public imageUrl: string = '',
        public description: string = 'This dish has not any description.',
        public ingredients: string[] = [],
        public date: number = 0
    ) { }
}
        // const time = new Date();
        // for (let i = 0; i < 15; i++) {
        //     this.dishesService.addDish({
        //         name: `Dish #${time.getMinutes()}:${time.getSeconds()}`,
        //         price: 5000,
        //         imageUrl: 'http://lorempixel.com/640/480/food/' + Math.ceil(Math.random() * 10),
        //         description: 'ddd zzz fff',
        //         ingredients: ['111', '222', '333'],
        //         date: new Date().getTime()
        //     })
        // }