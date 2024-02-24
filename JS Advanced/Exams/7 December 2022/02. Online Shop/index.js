class OnlineShop{
    constructor(werehouseSpaced){
        this.werehouseSpaced = werehouseSpaced;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired){
        if (this.werehouseSpaced < spaceRequired){
            throw new Error("Not enough space in the warehouse.");
        }

        if (!this.products.some(x => x.product == product)){
            this.products.push({product, quantity});
            this.werehouseSpaced -= spaceRequired;

            return `The ${product} has been successfully delivered in the warehouse.`;
        }
    }

    quantityCheck(product, minimalQuantity){
        let obj = this.products.find(x => x.product == product);

        if (!obj){
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0){
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (minimalQuantity <= obj.quantity){
            return `You have enough from product ${product}.`;
        }

        let diff = Math.abs(obj.quantity - minimalQuantity);
        obj.quantity = minimalQuantity;

        return `You added ${diff} more from the ${product} products.`;
    }

    sellProduct(product){
        let obj = this.products.find(x => x.product == product);

        if (!obj){
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        obj.quantity--;

        this.sales.push({product, ['quantity']: 1});

        return `The ${product} has been successfully sold.`;
    }

    revision(){
        if (this.sales.length == 0){
            throw new Error("There are no sales today!");
        }

        let result = `You sold ${this.sales.length} products today!\n`;
        result += "Products in the warehouse:\n";
        this.products.forEach(el => result+=`${el.product}-${el.quantity} more left\n`);

        return result.trim();
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.revision());

 

