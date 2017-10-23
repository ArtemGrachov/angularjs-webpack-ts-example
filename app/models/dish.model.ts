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