function solve(input){
    let sum1 = 0;
    input.forEach(el => { sum1 += el});

    let sum2 = 0;
    input.forEach(el => { sum2 += 1/el});

    let sum3 = '';
    input.forEach(el => { sum3 += el.toString()});

    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
}

solve([1, 2 ,3]);