function solve(input){
    let result = {};

    for (let i = 0; i < input.length - 1; i++) {
        let food = input[i];
        let cals = input[++i];
        result[food] = Number(cals);
    }

    console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);