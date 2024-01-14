function solve(input, step){
    let result = [];
    for (let i = 0; i < input.length; i+= step) {
        result.push(input[i]);
    }

    return result;
}

solve()