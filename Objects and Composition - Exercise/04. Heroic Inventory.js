function solve(input){
    let heroes = [];
    input.forEach(el => {
        let[name, level, items] = el.split(' / ');
        let hero = {name, level: Number(level), items: items ? items.split(', ') : []};
        heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}

solve(['Isacc / 25',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);