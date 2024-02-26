function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let nextStop
    let nextStopName = 'depot'

    const [departBtn, arriveBtn] = document.querySelectorAll('input');
    const infoBox = document.getElementsByClassName('info')[0];

    async function depart() {
        try{
            departBtn.disabled = true;
            arriveBtn.disabled = false;

            const response = await fetch(url + nextStopName);
            nextStop = await response.json();
            infoBox.innerHTML = `Next stop ${nextStop.name}`;
        } catch (err){
            infoBox.innerHTML = 'Error';

            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        try{
            departBtn.disabled = false;
            arriveBtn.disabled = true;
            
            infoBox.innerHTML = `Arriving at ${nextStop.name}`;
            nextStopName = nextStop.next;
        } catch (err){
            infoBox.innerHTML = 'Error';

            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
        
    }

    return {
        depart,
        arrive
    };
}

let result = solve();