function solve(num){
    let intArr = Array.from(String(num));

    let digit = num.toString()[0];
    let result = true;
    for (let i = 1; i < intArr.length; i++) {
        if (digit != intArr[i]){
            result = false;
        }
    }

    console.log(result);
    let sum = 0;
    
    intArr.forEach(el => sum += Number(el));
    console.log(sum);
}

solve(1234);