class WineSelection{
    constructor(space){
        this.space = space,
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price){
        if (this.wines.length == this.space){
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({wineName, wineType, price, paid:false});
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle( wineName, price ){
        let wine = this.wines.find(x => x.wineName == wineName);

        if (!wine){
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid){
            throw new Error(`${wineName} has already been paid.`);
        }

        wine.paid = true;
        this.bill += price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName){
        let wine = this.wines.find(x => x.wineName == wineName);

        if (!wine){
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (wine.paid == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        let index = this.wines.indexOf(wine);
        this.wines.splice(index, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType){
        if (wineType){
            let sorted = this.wines.filter(x => x.wineType == wineType);

            if (sorted.length == 0){
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            let result = '';
            sorted.forEach(el => result += `${el.wineName} > ${el.wineType} - ${el.paid ? 'Has Paid' : 'Not Paid'}.`);
            return result.trim();
            
        } else{
            let result = `You have space for ${Math.abs(this.wines.length - this.space)} bottles more.\n`;
            result += `You paid ${this.bill}$ for the wine.\n`;

            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            sorted.forEach(el => result += `${el.wineName} > ${el.wineType} - ${el.paid ? 'Has Paid' : 'Not Paid'}.\n`);

            return result.trim();
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());

let selection = new WineSelection(5);

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());

//'You have space for -2 bottles more.\nYou paid 144$ for the wine.\nBodegas Godelia Mencía > Rose - Has Paid.\nCabernet Sauvignon Napa Valley > Red - Not Paid.\nSauvignon Blanc Marlborough > White - Not Paid.' to equal 'You have space for 2 bottles more.\nYou paid 144$ for the wine.\nBodegas Godelia Mencía > Rose - Has Paid.\nCabernet Sauvignon Napa Valley > Red - Not Paid.\nSauvignon Blanc Marlborough > White - Not Paid.'