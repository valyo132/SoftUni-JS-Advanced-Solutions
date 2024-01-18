function solve(input){
    let result = {};

    input.forEach(el => {
        let [town, product, price] = el.split(' | ');

        let exist = result[product];
        if (exist){
            if (exist.price > Number(price)){
                exist.price = price;
                exist.town = town;
            }
        } else{
            result[product] = {price: Number(price), town};
        }
    });

    for (const [product, value] of Object.entries(result)) {
        console.log(`${product} -> ${value.price} (${value.town})`)
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);