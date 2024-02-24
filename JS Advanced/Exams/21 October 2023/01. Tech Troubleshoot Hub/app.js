window.addEventListener('load', solution);

function solution() {
  const [nameInput, descriptionInput] = document.querySelectorAll('input');
  const [categorySelect, urgencySelect, teamSelect] = document.querySelectorAll('select');

  const previewList = document.getElementsByClassName('preview-list')[0];
  const pendingList = document.getElementsByClassName('pending-list')[0];
  const resolvedList = document.getElementsByClassName('resolved-list')[0];

  const addBtn = document.getElementById('add-btn');

  addBtn.addEventListener('click', function(event){
    event?.preventDefault();

    let isValid = nameInput.value.length > 0 && descriptionInput.value.length > 0 && categorySelect.value.length > 0 
      && urgencySelect.value.length > 0 && teamSelect.value.length > 0;

    if (isValid){
      const li = createCustomElement('li', '', 'problem-content');

      const article = createCustomElement('article', '', '');
      article.appendChild(createCustomElement('p', `From: ${nameInput.value}`, ''));
      article.appendChild(createCustomElement('p', `Category: ${categorySelect.value}`, ''));
      article.appendChild(createCustomElement('p', `Urgency: ${urgencySelect.value}`, ''));
      article.appendChild(createCustomElement('p', `Assigned to: ${teamSelect.value}`, ''));
      article.appendChild(createCustomElement('p', `Description: ${descriptionInput.value}`, ''));
      li.appendChild(article);

      const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
      editBtn.addEventListener('click', loadEdit);
      const contBtn = createCustomElement('button', 'Continue', 'continue-btn');
      contBtn.addEventListener('click', contProblem);

      li.appendChild(editBtn);
      li.appendChild(contBtn);

      previewList.appendChild(li);
      addBtn.disabled = true;

      nameInput.value = '';
      descriptionInput.value = '';
      categorySelect.value = '';
      urgencySelect.value = '';
      teamSelect.value = '';
    }
  })

  function contProblem(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    const [btn1, btn2] = li.querySelectorAll('button');
    btn1.remove();
    btn2.remove();

    const reslovedBtn = createCustomElement('button', 'Resolved', 'resolve-btn');
    reslovedBtn.addEventListener('click', resolveProblem);
    li.appendChild(reslovedBtn);

    pendingList.appendChild(li);
    addBtn.disabled = false;
  }

  function resolveProblem(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    const btn1 = li.querySelectorAll('button')[0];
    btn1.remove();

    const clearBtn = createCustomElement('button', 'Clear', 'clear-btn');
    clearBtn.addEventListener('click', clearProblem);
    li.appendChild(clearBtn);

    resolvedList.appendChild(li);
  }

  function clearProblem(event){
    const li = event.currentTarget.parentNode;
    li.remove();
  }

  function loadEdit(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    nameInput.value = li.querySelectorAll('p')[0].textContent.split('From: ')[1];
    categorySelect.value = li.querySelectorAll('p')[1].textContent.split('Category: ')[1];
    urgencySelect.value = li.querySelectorAll('p')[2].textContent.split('Urgency: ')[1];
    teamSelect.value = li.querySelectorAll('p')[3].textContent.split('Assigned to: ')[1];
    descriptionInput.value = li.querySelectorAll('p')[4].textContent.split('Description: ')[1];

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


    
    
