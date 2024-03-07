const url = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const refreshBtrn = document.getElementById('refresh');

    refreshBtrn.addEventListener('click', getMessages);
    submitBtn.addEventListener('click', postMessage);
}

async function postMessage(){
    const authorInput = document.querySelectorAll('input')[0];
    const contentInput = document.querySelectorAll('input')[1];

    let author = authorInput.value.trim();
    let content = contentInput.value.trim();

    try{
        await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({author, content})
        });

        authorInput.value = '';
        contentInput.value = '';
    } catch(err){
        alert(err.message);
    }
}

async function getMessages(){
    const messages = document.getElementById('messages');

    const res = await fetch(url);
    const data = await res.json();

    let result = '';
    for (const [_id, obj] of Object.entries(data)) {
        result += `${obj.author}: ${obj.content}\n`;
    }
    messages.innerHTML = result.trim();
}

attachEvents();