async function solution() {
    await load();

    const buttons = document.querySelectorAll('button');

    for (const btn of buttons) {
        btn.addEventListener('click', function(event){
            let parent = event.currentTarget.parentNode.parentNode;

            if (btn.textContent == 'More'){
                parent.querySelectorAll('div')[1].style.display = 'block';
                btn.textContent = 'Less';
            } else if (btn.textContent == 'Less'){
                parent.querySelectorAll('div')[1].style.display = 'none';
                btn.textContent = 'More';
            }
        })
    }
}

async function load(){
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const taskUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const main = document.getElementById('main');

    const response = await fetch(baseUrl);
    const data = await response.json();

    for (const obj of data) {
        const res = await fetch(taskUrl + obj._id);
        const task = await res.json();
        main.innerHTML += `
        <div class="accordion">
            <div class="head">
                <span>${task.title}</span>
                <button class="button" id=${task._id}>More</button>
            </div>
            <div class="extra">
                <p>${task.content}</p>
            </div>
        </div>
        `
    }
}