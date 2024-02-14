window.addEventListener('load', solve);

function solve() {
    const [timeInput, dateInput, placeInput, eventInput, emailInput] = document.querySelectorAll('input');

    const checkList = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');

    const addBtn = document.getElementById('add-btn');
    const clear = document.getElementById('clear');

    clear.addEventListener('click', function(){
        const li = finishedList.querySelectorAll('li')[0];
        li.remove();
    })

    addBtn.addEventListener('click', function(){
        let isValid = timeInput.value.length > 0 && dateInput.value.length > 0 && placeInput.value.length > 0
            && eventInput.value.length > 0 && emailInput.value.length > 0;

        if (isValid){
            const li = createCustomElement('li', '', 'event-content');

            const article = createCustomElement('article', '', '');
            article.appendChild(createCustomElement('p', `Begins: ${dateInput.value} at: ${timeInput.value}`, ''));
            article.appendChild(createCustomElement('p', `In: ${placeInput.value}`, ''));// spaces?
            article.appendChild(createCustomElement('p', `Event: ${eventInput.value}`, ''));// spaces?
            article.appendChild(createCustomElement('p', `Contact: ${emailInput.value}`, ''));// spaces?
            li.appendChild(article);

            const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
            editBtn.addEventListener('click', loadEdit);
            const contBtn = createCustomElement('button', 'Continue', 'continue-btn');
            contBtn.addEventListener('click', contTask);

            li.appendChild(editBtn);
            li.appendChild(contBtn);

            checkList.appendChild(li);

            timeInput.value = '';
            dateInput.value = '';
            placeInput.value = '';
            eventInput.value = '';
            emailInput.value = '';
            addBtn.disabled = true;
        }
    })

    function contTask(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        const [btn1, btn2] = li.querySelectorAll('button');
        btn1.remove();
        btn2.remove();

        const move = createCustomElement('button', 'Move to Finished', 'finished-btn');
        move.addEventListener('click', finishTask);
        li.appendChild(move);

        upcomingList.appendChild(li);
        addBtn.disabled = false;
    }

    function finishTask(event){
        const li = event.currentTarget.parentNode;
        li.remove();
        const btn1 = li.querySelectorAll('button')[0];
        btn1.remove();
        finishedList.appendChild(li);
    }

    function loadEdit(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        let date = li.querySelectorAll('p')[0].textContent.split(' at: ')[0]

        timeInput.value = li.querySelectorAll('p')[0].textContent.split(' at: ')[1];
        dateInput.value = date.split(' ')[1];
        placeInput.value = li.querySelectorAll('p')[1].textContent.split('In: ')[1];
        eventInput.value = li.querySelectorAll('p')[2].textContent.split('Event: ')[1];
        emailInput.value = li.querySelectorAll('p')[3].textContent.split('Contact: ')[1];

        addBtn.disabled = false;
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
}


    
    
