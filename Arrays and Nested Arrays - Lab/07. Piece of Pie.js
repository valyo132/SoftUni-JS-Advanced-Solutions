function solve(input, key1, key2){
    let startIndex = input.indexOf(key1);
    let endIndex = input.indexOf(key2);

    let result = [];

    for (let i = startIndex; i <= endIndex; i++) {
        result.push(input[i]);
    }

    return result;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));