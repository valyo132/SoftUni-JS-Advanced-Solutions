window.addEventListener('load', solve);

function solve() {
   const [firstNameInput, lastNameInput, numOfPeopleInput, fromDateInput, numOfDaysInput] = document.querySelectorAll('input');

   const list = document.getElementsByClassName('ticket-info-list')[0];
   const conList = document.getElementsByClassName('confirm-ticket')[0];
   const body = document.getElementById('body');
   
   const nextBtn = document.getElementById('next-btn');

   nextBtn.addEventListener('click', function(event){
    event?.preventDefault();

    let isValid = firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && numOfPeopleInput.value.length > 0
        && fromDateInput.value.length > 0 && numOfDaysInput.value.length > 0;

    if(isValid){
        const li = createCustomElement('li', '', 'ticket');

        const article = createCustomElement('article', '', '');
        article.appendChild(createCustomElement('h3', `Name: ${firstNameInput.value} ${lastNameInput.value}`, ''));
        article.appendChild(createCustomElement('p', `From date: ${fromDateInput.value}`, ''));
        article.appendChild(createCustomElement('p', `For ${numOfDaysInput.value} days`, ''));
        article.appendChild(createCustomElement('p', `For ${numOfPeopleInput.value} people`, ''));
        li.appendChild(article);

        const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
        editBtn.addEventListener('click', loadEdit);
        const contBtn = createCustomElement('button', 'Continue', 'continue-btn');
        contBtn.addEventListener('click', contTask);

        li.appendChild(editBtn);
        li.appendChild(contBtn);

        list.appendChild(li);

        nextBtn.disabled = true;

        firstNameInput.value = '';
        lastNameInput.value = '';
        fromDateInput.value = '';
        numOfDaysInput.value = '';
        numOfPeopleInput.value = '';
    }
   })

   function contTask(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    const [btn1, btn2] = li.querySelectorAll('button');
    btn1.remove();
    btn2.remove(); 

    li.appendChild(createCustomElement('button', 'Confirm', 'confirm-btn'));
    li.querySelectorAll('button')[0].addEventListener('click', confirmTask);

    li.appendChild(createCustomElement('button', 'Cancel', 'cancel-btn'));
    li.querySelectorAll('button')[1].addEventListener('click', cancelTask);

    conList.appendChild(li);
   }

   function confirmTask(){
    body.innerHTML = '';

    const h1 = createCustomElement('h1', 'Thank you, have a nice day!', '');
    h1.id = 'thank-you';

    const backBtn = createCustomElement('button', 'Back ', '');
    backBtn.id = 'back-btn';
    backBtn.addEventListener('click', function(){
        location.reload();
    });

    body.appendChild(h1);
    body.appendChild(backBtn);
   }

   function cancelTask(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    nextBtn.disabled = false;
   }

   function loadEdit(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    let names = li.querySelectorAll('h3')[0].textContent.split('Name: ')[1];
    let days = li.querySelectorAll('p')[1].textContent.split('For ')[1];
    let people = li.querySelectorAll('p')[2].textContent.split('For ')[1];

    firstNameInput.value = names.split(' ')[0];
    lastNameInput.value = names.split(' ')[1];
    numOfPeopleInput.value = people.split(' ')[0];
    fromDateInput.value = li.querySelectorAll('p')[0].textContent.split('From date: ')[1];
    numOfDaysInput.value = days.split(' ')[0];

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



    
    
