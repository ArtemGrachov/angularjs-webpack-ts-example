export interface Order {
    phone: string;
    cart: { name: string, price: number }[];
    location: { lat: number, lng: number };
    date: number;
}