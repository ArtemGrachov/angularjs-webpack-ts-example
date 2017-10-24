export class Restaurant {
    constructor(
        public address: string = 'Address',
        public gmap: { lat: number, lng: number } = { lat: 0, lng: 0 },
        public phone: string = '+(380)97-555-55-55',
        public imagesUrls: string[] = []
    ) { }
}