class FashionRetailInventory{
    constructor(storehouse, location){
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }

    addProduct (productName, size, quantity, price){
        let obj = this.productStock.find(x => x.productName == productName && x.size == size);

        if (obj){
            obj.quantity += quantity;
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        }

        this.productStock.push({productName, size, quantity, price});
        return `The product ${productName}, size ${size} was successfully added to the inventory`;
    }

    sendProduct (productName, size){
        let obj = this.productStock.find(x => x.productName == productName && x.size == size);

        if (!obj){
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        }

        let index = this.productStock.indexOf(obj);
        this.productStock.splice(index, 1);
        return `The product ${productName}, size ${size} was successfully removed from the inventory`;
    }

    findProductsBySize(size){
        let objs = this.productStock.filter(x => x.size == size);

        if (objs.length == 0){
            return `There are no products available in that size`;
        }

        let result = [];
        objs.forEach(el => result.push(`${el.productName}-${el.quantity} pieces`));
        return result.join(', ');
    }

    listProducts (){
        if (this.productStock.length == 0){
            return `${this.storehouse} storehouse is empty`;
        }

        let sorted = this.productStock.sort((a,b) => a.productName.localeCompare(b.productName));

        let result = `${this.storehouse} storehouse in ${this.location} available products:\n`;
        sorted.forEach(el => result += `${el.productName}/Size:${el.size}/Quantity:${el.quantity}/Price:${el.price}$\n`);

        return result.trim();
    }
}

let Store = new FashionRetailInventory("East", "Milano");

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Sweather", "M", 10, 25.0));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.sendProduct("T-Shirt", "M"));
// console.log(storeHouse.sendProduct("Sweather", "M"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.findProductsBySize("M"));
// console.log(storeHouse.findProductsBySize("XL"));

// const storeHouse = new FashionRetailInventory("East", "Milano");
// console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
// console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
// console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
// console.log(storeHouse.listProducts());
