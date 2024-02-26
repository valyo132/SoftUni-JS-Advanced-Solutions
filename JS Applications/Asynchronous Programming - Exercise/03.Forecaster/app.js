function attachEvents() {
    const locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';

    const [locationInput, submitBtn] = document.querySelectorAll('input');

    submitBtn.addEventListener('click', async () =>{
        try{
            const response = await fetch(locationsUrl);
            const data = await response.json();
    
            for (const obj in Object.entries(data)) {
                if (data[obj].name == locationInput.value){
                    const currentConditionData = await getCurrectConditionData(data[obj].code);
                    const upcomingData = await getUpcomingData(data[obj].code);
                    displayWether(currentConditionData, upcomingData);
                }
            }
        } catch(err){
            forecast.style.display = "block";
            forecast.innerHTML = `<p id="errorMessage">${error.message}</p>`;
        }
    })
}

function displayWether(currentConditionData, upcomingData){
    let conditions = {
        'Sunny': '&#x2600', 'Partly sunny': '&#x26C5', 'Overcast': '&#x2601', 'Rain': '&#x2614', 'Degrees': '&#176'
    };
    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');

    forecast.style.display = 'block';

    let divCurr = document.createElement('div')
        divCurr.setAttribute('class', 'forecasts')
        divCurr.innerHTML = `
          <span class="condition symbol">${conditions[currentConditionData.forecast.condition]}</span>
          <span class="condition">
            <span class="forecast-data">${currentConditionData.name}</span>
            <span class="forecast-data">${currentConditionData.forecast.low}°/${currentConditionData.forecast.high}°</span>
            <span class="forecast-data">${currentConditionData.forecast.condition}</span>
          </span>   
        `
    current.appendChild(divCurr);

    const divUp = document.createElement('div');
    divUp.setAttribute('class', 'forecast-info');
    for (const arr of upcomingData.forecast) {
        divUp.innerHTML += `
        <span class="upcoming">
          <span class="symbol">${conditions[arr.condition]}</span>
          <span class="forecast-data">${arr.low}°/${arr.high}°</span>
          <span class="forecast-data">${arr.condition}</span>
        </span>`
    }

    upcoming.appendChild(divUp);
}

async function getCurrectConditionData(code){
    const currentConditionUrl = 'http://localhost:3030/jsonstore/forecaster/today/';

    const response = await fetch(currentConditionUrl + code);
    const data = await response.json();
    return data;
}

async function getUpcomingData(code){
    const upcomingUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    const response = await fetch(upcomingUrl + code);
    const data = await response.json();
    return data;
}

function createCustomElement(type, content, classOf){
    let item = document.createElement(type);

    if (content != ''){
        item.textContent = content;
    }

    if (classOf != ''){
        item.classList.add(classOf);
    }

    return item;
}

attachEvents();