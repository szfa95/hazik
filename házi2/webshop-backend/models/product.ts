export class Product {
    constructor(
        public id: string,
        public title: string,
        public price: number,
        public description?: string  
    ) {
        
    }
}

export class Inventory{
    constructor(
        public prodList: product [] = []
    ) {
        addProduct(product: Product): void {
            this.prodList.push(product)
        }
        removeproduct(id: string): void {
            this.prodList = this.prodList.filter(product => product.id !== id);
        }
        findProductById(id: string): Product | undefined {
            return this.prodList.find(product => product.id === id);
        }
        listAllProduct(): Product[] {
            return this.prodList;
        }
    }
}