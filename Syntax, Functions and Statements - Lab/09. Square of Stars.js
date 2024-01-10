function solve(input){
    let buf = input;
    if (!Number.isInteger(input)){
        buf = 5;
    }

    for (let i = 1; i <= buf; i++) {
        console.log('* '.repeat(buf));
    }
}

solve("d");