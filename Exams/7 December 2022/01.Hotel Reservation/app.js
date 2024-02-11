window.addEventListener('load', solve);

function solve() {
    const [firstNameInput, lastNameInput, checkInDateInput, chackOutDateInput, guestsInput] = document.querySelectorAll('input');

    const resInfo = document.getElementsByClassName('info-list')[0];
    const conList = document.getElementsByClassName('confirm-list')[0];
    const h1 = document.getElementById('verification');

    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', function(event){
        event?.preventDefault();

        let isValid = firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && checkInDateInput.value.length > 0
            && chackOutDateInput.value.length > 0 && guestsInput.value.length > 0;

        if (isValid && chackOutDateInput.value > checkInDateInput.value){
            const li = createCustomElement('li', '', 'reservation-content');

            const article = createCustomElement('article', '', '');
            article.appendChild(createCustomElement('h3', `Name: ${firstNameInput.value} ${lastNameInput.value}`, ''));
            article.appendChild(createCustomElement('p', `From date: ${checkInDateInput.value}`, ''));
            article.appendChild(createCustomElement('p', `To date: ${chackOutDateInput.value}`, ''));
            article.appendChild(createCustomElement('p', `For ${guestsInput.value} people`, ''));

            li.appendChild(article);

            const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
            editBtn.addEventListener('click', loadEdit);
            const continueBtn = createCustomElement('button', 'Continue', 'continue-btn');
            continueBtn.addEventListener('click', loadCon);

            li.appendChild(editBtn);
            li.appendChild(continueBtn);

            resInfo.appendChild(li);

            nextBtn.disabled = true;
            firstNameInput.value = '';
            lastNameInput.value = '';
            checkInDateInput.value = '';
            chackOutDateInput.value = '';
            guestsInput.value = '';
        }
    });

    function loadCon(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        const [btn1, btn2] = li.querySelectorAll('button');
        btn1.remove();
        btn2.remove(); 

        li.appendChild(createCustomElement('button', 'Confirm', 'confirm-btn'));
        li.querySelectorAll('button')[0].addEventListener('click', confirmRes);

        li.appendChild(createCustomElement('button', 'Cancel', 'cancel-btn'));
        li.querySelectorAll('button')[1].addEventListener('click', cancelRes);

        conList.appendChild(li);
    }

    function cancelRes(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        h1.className = 'reservation-cancelled';
        h1.textContent = 'Cancelled.';

        nextBtn.disabled = false;
    }

    function confirmRes(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        h1.className = 'reservation-confirmed';
        h1.textContent = 'Confirmed.';

        nextBtn.disabled = false;
    }

    function loadEdit(event){
        const li = event.currentTarget.parentNode;
        li.remove();

        const names = li.querySelectorAll('h3')[0].textContent.split('Name: ')[1];
        const helper = li.querySelectorAll('p')[2].textContent.split('For ')[1];

        firstNameInput.value = names.split(' ')[0];
        lastNameInput.value = names.split(' ')[1];
        checkInDateInput.value = li.querySelectorAll('p')[0].textContent.split('From date: ')[1];
        chackOutDateInput.value = li.querySelectorAll('p')[1].textContent.split('To date: ')[1];
        guestsInput.value = helper.split(' ')[0];

        nextBtn.disabled = false;
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



    
    
