function solve(input){
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] >= 0){
            result.push(input[i]);
        }else{
            result.unshift(input[i]);
        }
    }

    console.log(result.join('\n'));
}