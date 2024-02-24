class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }

    static FACES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    static SUITS = ["S", "H", "D", "C"];

    toString() {
        if (this.face && this.suit) {
            let symbol;
            switch (this.suit) {
                case "S":
                    symbol = "\u2660";
                    break;
                case "H":
                    symbol = "\u2665";
                    break;
                case "D":
                    symbol = "\u2666";
                    break;
                case "C":
                    symbol = "\u2663";
                    break;
                default:
                    throw new Error("Invalid card!");
            }
            return `[${this.face}${symbol}]`;
        }
        return null;
    }
}

function solve(input) {

    const cards = [];
    for (let kvp of input) {
        const kvpArgs = kvp.trim().split(" ");
        try {
            const currCard = new Card(kvpArgs[0], kvpArgs[1]);
            cards.push(currCard);
        } catch (error) {
            console.log("Invalid card!");
        }
    }

    console.log(cards.join(" "));
}

solve(['AS', '10D', 'KH', '2C']);