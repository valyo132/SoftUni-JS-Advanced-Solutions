function solve(speed, zone){
    switch(zone){
        case 'motorway':
            if (speed <= 130){
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } else{
                let overLimit = speed - 130;
                let status = getStatus(overLimit);

                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 130 - ${status}`);
            }
            break;
        case 'interstate':
            if (speed <= 90){
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } else{
                let overLimit = speed - 90;
                let status = getStatus(overLimit);

                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 90 - ${status}`);
            }
            break;
        case 'city':
            if (speed <= 50){
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else{
                let overLimit = speed - 50;
                let status = getStatus(overLimit);

                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 50 - ${status}`);
            }
            break;
        case 'residential':
            if (speed <= 20){
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else{
                let overLimit = speed - 20;
                let status = getStatus(overLimit);

                console.log(`The speed is ${overLimit} km/h faster than the allowed speed of 20 - ${status}`);
            }
            break;
    }

    function getStatus(speed){
        if (speed <= 20){
            return 'speeding';
        } else if (speed <= 40){
            return 'excessive speeding';
        } else{
            return 'reckless driving';
        }
    }
}

solve(200, 'motorway');