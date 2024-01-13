function solve(input){
    let result = Number.MIN_SAFE_INTEGER;
    input.forEach(arr => {
        let max = Math.max(...arr);
        if (max > result){
            result = max;
        }
    });

    return result;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));