document.getElementById('logout').addEventListener('click', async () => {
    const res = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': JSON.parse(session).accessToken
        }
    });

    localStorage.clear();
    location.reload();
})

const session = localStorage.getItem('user');

if (!session){
    document.getElementById('user').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('guest').style.display = 'inline-block';
    document.getElementsByClassName('add')[0].disabled = true;
} else{
    document.getElementById('user').style.display = 'inline-block';
    document.getElementById('main').style.display = 'inline-table';
    document.getElementById('guest').style.display = 'none';
    document.getElementsByClassName('add')[0].disabled = false;
    document.querySelector('span').textContent = JSON.parse(session).email;
}

const catchesUrl = 'http://localhost:3030/data/catches/';

document.getElementsByClassName('load')[0].addEventListener('click', loadCatches);

async function loadCatches(){
    const catches = document.getElementById('catches');
    catches.innerHTML = '';

    const res = await fetch(catchesUrl);
    const data = await res.json();

    for (const [_id, obj] of Object.entries(data)) {
        catches.innerHTML += `
        <div class="catch">
            <label>Angler</label>
            <input type="text" class="angler" value="${obj.angler}">
            <label>Weight</label>
            <input type="text" class="weight" value="${obj.weight}">
            <label>Species</label>
            <input type="text" class="species" value="${obj.species}">
            <label>Location</label>
            <input type="text" class="location" value="${obj.location}">
            <label>Bait</label>
            <input type="text" class="bait" value="${obj.bait}">
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${obj.captureTime}">
            <button class="update" data-id="${obj._id}" disabled>Update</button>
            <button class="delete" data-id="${obj._id}" disabled>Delete</button>
        </div>
        `;

        const [updateBtn, deleteBtn] = catches.querySelectorAll('button');

        if (JSON.parse(session).accessToken == obj._ownerId){
            updateBtn.disabled = false;
            deleteBtn.disabled = false;
        }

        updateBtn.addEventListener('click', loadEdit);
    }
}

function loadEdit(event){
    console.log('ok');
}