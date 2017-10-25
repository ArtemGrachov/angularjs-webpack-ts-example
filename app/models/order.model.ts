export class Order {
    constructor(
        public phone: string = '',
        public cart: { name: string, price: number }[] = [],
        public location: { lat: number, lng: number } = { lat: 0, lng: 0 },
        public date: number
    ) { }
}