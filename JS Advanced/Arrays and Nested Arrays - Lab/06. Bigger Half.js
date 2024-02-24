function solve(input){
    let sorted = input.sort(function(a, b){return a - b});
    let result = []

    let middle = Math.floor(sorted.length / 2);
    //if (sorted.length % 2 != 0) middle++;

    for (let i = middle; i < sorted.length; i++) {
        result.push(sorted[i]);
    }

    return result;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));