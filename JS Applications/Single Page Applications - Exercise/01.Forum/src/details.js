const container = document.getElementsByClassName('container')[0];

export async function onDetails(id){
    document.querySelector('main').style.display = 'none';
    const post = await getTopic(id);
    const comments = await getComments(id);

    const div = document.createElement('div');
    div.classList.add('comment');
    
    div.innerHTML += `
        <div class="header">
            <img src="./static/profile.png" alt="avatar">
            <p><span>${post.username}</span> posted on <time>${post.date}</time></p>

            <p class="post-content">${post.post}</p>
        </div>
    `;

    if (comments){
        for (const currCom of comments) {
            const comDiv = document.createElement('div');
            comDiv.id = 'user-comment';
            comDiv.innerHTML = `
                <div class="topic-name-wrapper">
                    <div class="topic-name">
                        <p><strong>${currCom.username}</strong> commented on <time>${new Date(obj.date).toISOString()}</time></p>
                        <div class="post-content">
                            <p>${obj.comment}</p>
                        </div>
                    </div>
                </div>
            `;
            div.appendChild(comDiv);
        }
    }

    div.innerHTML +=`
    <div class="answer-comment">
    <p><span>currentUser</span> comment:</p>
        <div class="answer">
            <form>
                <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                <div>
                    <label for="username">Username <span class="red">*</span></label>
                    <input type="text" name="username" id="username">
                </div>
                <button>Post</button>
            </form>
        </div>
    </div>
    `;

    div.querySelector('button').addEventListener('click', async () => {
        await onSubmit();
    });

    container.appendChild(div);
}

async function onSubmit(event){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    event?.preventDefault();
    const form = event.currentTarget.parentNode;

    const comment = form.querySelector('textarea').value;
    const user = form.querySelector('input').value;
    const date = new Date().getTime();
    const _topicId = dataId;

    if (comment.length > 0 && user.length > 0){
        const res = await fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({comment, user, date, _topicId})
        });
    }
}

async function getTopic(id){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts/';

    const res = await fetch(url + id, {
        method: 'get',
        headers: {'Content-Type': 'application.json'}
    });
    return await res.json();
}

async function getComments(id){
    const url = 'http://localhost:3030/jsonstore/collections/myboard/comments';
    const res = await fetch(url + id);
    if (res.status != 204){
        return await res.json();
    }

    return undefined;
}