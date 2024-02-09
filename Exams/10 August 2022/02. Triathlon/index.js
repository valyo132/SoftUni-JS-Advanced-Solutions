class Triathlon{
    constructor(competitionName){
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(partisipantName, participantGender){
        if (this.participants.hasOwnProperty(partisipantName)){
            return `${partisipantName} has already been added to the list`;
        } else{
            this.participants[partisipantName] = participantGender;

            return `A new participant has been added - ${partisipantName}`;
        }
    }

    completeness(participantName, condition){
        if (!this.participants.hasOwnProperty(participantName)){
            throw new Error(`${participantName} is not in the current participants list`);
        }

        if (condition < 30){
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
        }
        
        let ableToComplete = Math.floor(condition / 30);

        if (ableToComplete <= 2){
            return `${participantName} could only complete ${ableToComplete} of the disciplines`;
        }

        let obj = this.participants[participantName];
        delete this.participants[participantName];

        this.listOfFinalists.push({ participantName, obj });

        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName){
        if (!this.listOfFinalists.some((x) => x.participantName == participantName)){
            return `${participantName} is not in the current finalists list`;
        } else{
            return `${participantName} was rewarded with a trophy for his performance`;
        }
    }

    showRecord(criteria){
        if (this.listOfFinalists.length == 0){
            return `There are no finalists in this competition`;
        }

        if (criteria != 'all'){
            let result = this.listOfFinalists.filter(x => x.participantGender == criteria);

            if (result.length == 0){
                return `There are no ${criteria}'s that finished the competition`;
            }

            result.sort((a, b) => a.time - b.time);
            const finalist = result[0];

            return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
        } else{
            let output = `List of all ${this.competitionName} finalists:\n`;
            this.listOfFinalists.forEach(el => {
                output += `${el.participantName}\n`;
            });
            return output.trim();
        }
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));
