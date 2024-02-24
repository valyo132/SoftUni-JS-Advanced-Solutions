function solve(input){
    let biggest = input[0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] >= biggest){
            biggest = input[i];
        } else{
            input.splice(i, 1);
            i--;
        }
    }

    return input;
}

console.log(solve([1,3,8,4,10,12,3,2,24]));