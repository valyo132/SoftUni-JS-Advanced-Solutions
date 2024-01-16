function solve(input){
    let result = {};

    input.forEach(el => {
        let [city, population] = el.split(' <-> ');

        if (result.hasOwnProperty(city)){
            result[city] += Number(population);
        } else{
            result[city] = Number(population);
        }
    });

    for (const [city, population] of Object.entries(result)) {
        console.log(`${city} : ${population}`);
    }
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);