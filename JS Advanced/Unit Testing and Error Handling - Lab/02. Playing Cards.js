function solve(value, suit){
    let validCardValues = [2,3,4,5,6,7,8,9,10,'J', 'Q', 'K', 'A'];

    let suitMaker = {
        ['H']: '\u2665',
        ['S']: '\u2660',
        ['D']: '\u2666',
        ['C']: '\u2663'
    }

    if (validCardValues.includes(value) && suitMaker[suit] != undefined){
        return {
            ['face']: value,
            ['suit']: suitMaker[suit],
            toString() {
                return `${value}${suitMaker[suit]}`;
            }
        }
    } else{
        throw new Error('Error');
    }
}

let result = solve('1', 'S');
console.log(result.toString());