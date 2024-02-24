window.addEventListener("load", solve);

function solve() {
  const [firstNameInput, lastNameInput, ageInput] = document.querySelectorAll('input');
  const dishDescrInput = document.getElementById('task');
  const genderSelect = document.getElementById('genderSelect');

  const ul = document.getElementById('in-progress');
  const count = document.getElementById('progress-count');
  const finished = document.getElementById('finished');

  const submitBtn = document.getElementById('form-btn');

  const clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', function(){
    finished.innerHTML = '';
  })

  submitBtn.addEventListener('click', function(){
    let isValid = firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && ageInput.value.length > 0 && dishDescrInput.value.length > 0;

    if (isValid){
      const li = createCustomElement('li', 'none', 'each-line');

      const article = createCustomElement('article', 'none', 'none');
      article.appendChild(createCustomElement('h4', `${firstNameInput.value} ${lastNameInput.value}`, 'none'));
      article.appendChild(createCustomElement('p', `${genderSelect.value}, ${ageInput.value}`, 'none'));
      article.appendChild(createCustomElement('p', `Dish description: ${dishDescrInput.value}`, 'none'));

      li.appendChild(article);

      const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
      editBtn.addEventListener('click', loadEdit);
      const completeBtn = createCustomElement('button', 'Mark as complete', 'complete-btn');
      completeBtn.addEventListener('click', completeTask);

      li.appendChild(editBtn);
      li.appendChild(completeBtn);

      ul.appendChild(li);

      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      dishDescrInput.value = '';

      count.textContent = Number(Number(count.textContent) + 1);
    }
  })

  function completeTask(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    let [btn1, btn2] = li.querySelectorAll('button');
    btn1.remove();
    btn2.remove();

    finished.appendChild(li);

    count.textContent = Number(Number(count.textContent) - 1);
  }

  function loadEdit(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    firstNameInput.value = li.querySelectorAll('h4')[0].textContent.split(' ')[0];
    lastNameInput.value = li.querySelectorAll('h4')[0].textContent.split(' ')[1];
    genderSelect.value = li.querySelectorAll('p')[0].textContent.split(', ')[0];
    ageInput.value = li.querySelectorAll('p')[0].textContent.split(', ')[1];
    dishDescrInput.value = li.querySelectorAll('p')[1].textContent.split('Dish description: ')[1];

    count.textContent = Number(Number(count.textContent) - 1);
  }

  function createCustomElement(type, content, classOf){
    let item = document.createElement(type);

    if (content != 'none'){
        item.textContent = content;
    }

    if (classOf != 'none'){
        item.classList.add(classOf);
    }

    return item;
}
}
