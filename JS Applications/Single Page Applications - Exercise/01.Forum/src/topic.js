const topicContainer = document.getElementsByClassName('topic-container')[0];

export async function showhomeView(){
    document.querySelector('main').style.display = 'block';
    await load();
}

export async function postTopic(title, username, post){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    if (title.length > 0 && username.length > 0 && post.length > 0){
        let date = new Date().getTime();
        try {
            const res = await fetch(url, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, username, post, date})
            });
    
            if (!res.ok){
                const err = await res.json();
                throw new Error(err.message);
            }
        } catch (error) {
            alert(error.message);
        }
    }
}

export async function load(){
    const data = await getItems();

    for (const [_id, obj] of Object.entries(data.posts)) {
        let div = document.createElement('div');
        div.classList.add('topic-name-wrapper');
        div.innerHTML = `
            <div class="topic-name">
                <a data-id="${obj._id}" href="#" class="normal">
                    <h2>${obj.title}</h2>
                </a>
                <div class="columns">
                    <div>
                        <p>Date: <time>${new Date(obj.date).toISOString()}</time></p>
                        <div class="nick-name">
                            <p>Username: <span>${obj.username}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        topicContainer.appendChild(div);
    }
}

async function getItems(){
    const url = 'http://localhost:3030/jsonstore/collections/myboard';

    try {
        const res = await fetch(url, {
            method: 'get',
            headers: {'Content-Type': 'application/json'}
        });

        if (!res.ok){
            const err = await res.json();
            throw new Error(err.message);
        }

        return res.json();
    } catch (error) {
        alert(error.message);
    }
}