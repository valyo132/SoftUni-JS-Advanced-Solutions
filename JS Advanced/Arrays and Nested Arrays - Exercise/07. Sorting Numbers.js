function solve(input){
    let sorted = input.sort((a, b) => a - b);
    let result = [];

    while(sorted.length > 0){
        let smallest = sorted.splice(0, 1)[0];
        let biggest = sorted.splice(sorted.length - 1, 1)[0];
        result.push(smallest);
        result.push(biggest);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));