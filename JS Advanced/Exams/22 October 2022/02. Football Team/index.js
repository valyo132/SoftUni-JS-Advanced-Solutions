class FootballTeam{
    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers){
        let invited = [];

        footballPlayers.forEach(el => {
            let [footballer, age, value] = el.split('/');

            let player = this.invitedPlayers.find(x => x.name == footballer);

            if (player){
                if (value > player.playerValue){
                    player.playerValue = value;
                }
            } else{
                this.invitedPlayers.push({name:footballer, age:Number(age), playerValue:Number(value)});
                invited.push(footballer);
            }
        });

        return `You successfully invite ${invited.join(', ')}.`;
    }

    signContract(selectedPlayer){
        let [footballer, offer] = selectedPlayer.split('/');

        let player = this.invitedPlayers.find(x => x.name == footballer);

        if(!player){
            throw new Error(`${footballer} is not invited to the selection list!`);
        }

        if (offer < player.playerValue){
            let priceDifference = Math.abs(offer - player.playerValue);
            throw new Error(`The manager's offer is not enough to sign a contract with ${footballer}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${footballer} for ${offer} million dollars.`;
    }

    ageLimit(name, age){
        let player = this.invitedPlayers.find(x => x.name == name);

        if(!player){
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age){
            let ageDiff = Math.abs(player.age - age);

            if (ageDiff < 5){
                return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`;
            }
            
            if (ageDiff > 5){
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }

        return `${name} is above age limit!`;
    }

    transferWindowResult(){
        let result = "Players list:\n"

        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));

        sorted.forEach(el => result += `Player ${el.name}-${el.playerValue}\n`);

        return result.trim();
    }
}

// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new FootballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

let fTeam = new FootballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
