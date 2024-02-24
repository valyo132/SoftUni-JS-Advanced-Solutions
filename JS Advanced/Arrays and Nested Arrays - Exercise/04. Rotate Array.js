function solve(input, steps){
    for (let i = 0; i < steps; i++) {
        let lastToFirst = input.pop();
        input.unshift(lastToFirst);
    }

    console.log(input.join(' '));
}

solve([1,2,3,4], 2);