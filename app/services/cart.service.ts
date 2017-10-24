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
    }

    removeFromCart(id: string): void {
        const index = this.cart.indexOf(id);
        if (index > -1) {
            const removedId = this.cart.splice(
                this.cart.indexOf(id), 1);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
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