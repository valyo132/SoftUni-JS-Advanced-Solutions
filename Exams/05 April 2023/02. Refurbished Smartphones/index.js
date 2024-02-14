class RefurbishedSmartphones{
    constructor(retailer){
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition){
        if (model.length <= 0 || storage < 0 || price < 0 || condition.length <= 0){
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({model, storage, price, condition});

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage){
        let phone = this.availableSmartphones.find(x => x.model == model);

        if (!phone){
            throw new Error(`${model} was not found!`);
        }

        let discount = 0;

        if (phone.storage < desiredStorage){
            let diff = Math.abs(phone.storage - desiredStorage);

            if (diff <= 128){
                discount = phone.price * 0.1;
            } else{
                discount = phone.price * 0.2;
            }
        }

        phone.price -= discount;
        let index = this.availableSmartphones.indexOf(phone);
        this.availableSmartphones.splice(index, 1);
        this.soldSmartphones.push({model, storage:phone.storage, soldPrice:phone.price});
        this.revenue += phone.price;

        return `${model} was sold for ${phone.price.toFixed(2)}$`;
    }

    upgradePhones(){
        if (this.availableSmartphones.length == 0){
            throw new Error("There are no available smartphones!");
        }

        this.availableSmartphones.forEach(el => el.storage *= 2);

        let result = 'Upgraded Smartphones:\n';
        this.availableSmartphones.forEach(el => result += `${el.model} / ${el.storage} GB / ${el.condition} condition / ${el.price.toFixed(2)}$\n`);

        return result.trim();
    }

    salesJournal(criteria){
        if (criteria != 'storage' && criteria != 'model'){
            throw new Error("Invalid criteria!");
        }

        let sorted;

        if (criteria == 'storage'){
            sorted = this.soldSmartphones.sort((a, b) => b - a);
        } else{
            sorted = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${this.soldSmartphones.length} smartphones sold:\n`;
        sorted.forEach(el => result += `${el.model} / ${el.storage} GB / ${el.soldPrice.toFixed(2)}$\n`);

        return result.trim();
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 129);
console.log(retailer.salesJournal('storage'));
