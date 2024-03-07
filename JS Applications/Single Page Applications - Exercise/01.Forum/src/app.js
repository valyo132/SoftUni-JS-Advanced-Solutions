import { onDetails } from './details.js';
import {postTopic, showhomeView} from './topic.js';

const topicContainer = document.getElementsByClassName('topic-container')[0];

await showhomeView();

const postBtn = document.getElementsByClassName('public')[0].addEventListener('click', async (event) => {
    event.preventDefault();
    const [textInput, usernameInput] = document.querySelectorAll('input');
    const postInput = document.getElementById('postText');

    await postTopic(textInput.value, usernameInput.value, postInput.value);
});

const as = topicContainer.querySelectorAll('a');

for (const a of as) {
    a.addEventListener('click', async (event) => {
        await onDetails(event.currentTarget.dataset.id);
    })
}