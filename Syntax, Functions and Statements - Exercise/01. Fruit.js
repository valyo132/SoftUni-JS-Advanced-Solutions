function solve(str, grams, price){
    let kilos = grams / 1000;
    let totalPrice = price * kilos;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${str}.`);
}

solve('orange', 2500, 1.80);