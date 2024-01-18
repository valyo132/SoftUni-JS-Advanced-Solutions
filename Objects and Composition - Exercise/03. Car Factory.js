function solve(client){
    let result = {
        model: client.model
    }

    let engines = {
        ['small']: { power: 90, volume: 1800 },
        ['normal']: { power: 120, volume: 2400 },
        ['monster']: { power: 200, volume: 3500 },
    }

    if (client.power <= 90){
        result['engine'] = engines['small'];
    } else if (client.power <= 120){
        result['engine'] = engines['normal'];
    } else{
        result['engine'] = engines['monster'];
    }

    if (client.carriage == 'hatchback'){
        result['carriage'] = { type: 'hatchback', color: client.color };
    } else{
        result['carriage'] = { type: 'coupe', color: client.color };
    }

    if (client.wheelsize % 2 == 0){
        client.wheelsize--;
    }

    result['wheels'] = [client.wheelsize, client.wheelsize, client.wheelsize, client.wheelsize];

    return result;
}

let client = { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }

console.log(solve(client));