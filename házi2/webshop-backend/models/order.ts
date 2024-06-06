import { product } from "./product";

class order{
    constructor(
        public ordId: string,
        public ordList: product[],   //?
        public ordStatus: enum ordStat{
                                newProd = "Új", 
                                developement = "Feldolgozás alatt", 
                                done = "Kiszállítva"}
    ) {
        
        price(price: number): price{
            
        }
    }
}