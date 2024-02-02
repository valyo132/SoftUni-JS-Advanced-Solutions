function solve(arr, start, end){
    if (!Array.isArray(arr)){
        return NaN;
    }

    if (start < 0) start = 0;
    if (end > arr.length - 1) end = arr.length - 1; 

    return arr
        .slice(start, end + 1)
        .map(Number)
        .reduce((a, b) => a + b, 0);
}

console.log(solve([10, 'twenty', 30, 40], 0, 2));