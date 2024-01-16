function createAssemblyLine(){
    return {
        hasClima(car){
            car['temp'] = 21;
            car['tempSettings'] = 20;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings){
                    car.temp++;
                } else if (car.temp > car.tempSettings){
                    car.temp--;
                }
            }
        },
        hasAudio(car){
            car['currentTrack'] = {name:null, artist:null};
            car.nowPlaying = () => {
                if (car.currentTrack.name != null){
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(car){
            car.checkDistance = (num) => {
                if (num < 0.1){
                    console.log('Beep! Beep! Beep!');
                } else if (num < 0.25){
                    console.log('Beep! Beep!');
                } else if (num < 0.5){
                    console.log('Beep!');
                } else{
                    console.log('');
                }
            } 
        }
    }
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);



