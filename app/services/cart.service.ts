export class CartService {
    constructor() {
        const cart = localStorage.getItem('cart');
        if (cart) {
            this.cart = JSON.parse(cart);
        }
    }
    public static readonly serviceName: string = 'CartService';

    private cart: string[] = [];

    addToCart(dishId: string): void {
        this.cart.push(dishId);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        console.log(this.cart)
    }

    removeFromCart(id: string): string {
        const removedId = this.cart.splice(
            this.cart.indexOf(id), 1);
        localStorage.setItem('cart', JSON.stringify(this.cart));
        return removedId[0];
    }

    clearCart() {
        this.cart = [];
        localStorage.removeItem('cart');
    }

    getCart() {
        return this.cart;
    }

    countInCart(id: string) {
        return this.cart.filter(
            (elId: string) => elId == id
        ).length
    }
}