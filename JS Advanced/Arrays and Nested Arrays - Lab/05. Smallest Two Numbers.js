function solve(input){
    let result = [];

    let min1 = Math.min(...input);
    let index1 = input.indexOf(min1);
    input.splice(index1, 1);

    let min2 = Math.min(...input);
    let index2 = input.indexOf(min2);
    input.splice(index2, 1);

    result.push(min1);
    result.push(min2);

    console.log(result.join(' '));
}
solve([30, 15, 50, 5]);