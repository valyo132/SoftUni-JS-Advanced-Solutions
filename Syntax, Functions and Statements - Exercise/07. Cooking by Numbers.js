function solve(number, op1, op2, op3, op4, op5){
    let operations = [op1, op2, op3, op4, op5];
    let startingPoint = Number(number);

    operations.forEach(op =>{
        switch(op){
            case 'chop':
                startingPoint /= 2;
                console.log(startingPoint);
                break;
            case 'dice':
                startingPoint = Math.sqrt(startingPoint);
                console.log(startingPoint);
                break;
            case 'spice':
                startingPoint++;
                console.log(startingPoint);
                break;
            case 'bake':
                startingPoint *= 3;
                console.log(startingPoint);
                break;
            case 'fillet':
                startingPoint -= startingPoint * 0.2;
                console.log(startingPoint);
                break;
        }
    })
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');