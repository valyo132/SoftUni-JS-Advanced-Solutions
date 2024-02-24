window.addEventListener("load", solve);

function solve() {
  const [nameInput, heightInput, locationInput, creatorInput] = document.querySelectorAll('input');
  const specialInput = document.getElementById('special-attribute');

  const snowmanPeviewList = document.getElementsByClassName('snowman-preview')[0];
  const snowList = document.getElementsByClassName('snow-list')[0];
  const body = document.getElementsByClassName('body')[0];
  const main = document.getElementById('hero');
  const backImage = document.getElementById('back-img');

  const addBtn = document.getElementsByClassName('add-btn')[0];

  addBtn.addEventListener('click', function(event){
    event.preventDefault();

    let isValid = nameInput.value.length > 0 && heightInput.value.length > 0 && locationInput.value.length > 0 && creatorInput.value.length > 0
      && specialInput.value.length > 0;

    if (isValid){
      const li = createCustomElement('li', '', 'snowman-info');

      const article = createCustomElement('article', '', '');
      article.appendChild(createCustomElement('p', `Name: ${nameInput.value}`, ''));
      article.appendChild(createCustomElement('p', `Height: ${heightInput.value}`, ''));
      article.appendChild(createCustomElement('p', `Location: ${locationInput.value}`, ''));
      article.appendChild(createCustomElement('p', `Creator: ${creatorInput.value}`, ''));
      article.appendChild(createCustomElement('p', `Attribute: ${specialInput.value}`, ''));
      li.appendChild(article);

      const div = createCustomElement('div', '', 'btn-container');

      const editBtn = createCustomElement('button', 'Edit', 'edit-btn');
      editBtn.addEventListener('click', loadEdit);
      const nextBtn = createCustomElement('button', 'Next', 'next-btn');
      nextBtn.addEventListener('click', nextTask);
      div.appendChild(editBtn);
      div.appendChild(nextBtn);
      li.appendChild(div);

      snowmanPeviewList.appendChild(li);

      addBtn.disabled = true;
      nameInput.value = '';
      heightInput.value = '';
      locationInput.value = '';
      creatorInput.value = '';
      specialInput.value = '';
    }
  })

  function nextTask(event){
    const li = event.currentTarget.parentNode.parentNode;
    li.remove();

    li.classList.remove('snowman-info');
    li.classList.add('snowman-content');

    const article = li.querySelectorAll('article')[0];
    const div = li.querySelectorAll('div')[0];
    div.remove();

    const sendBtn = createCustomElement('button', 'Send', 'send-btn');
    sendBtn.addEventListener('click', sendTask);

    article.appendChild(sendBtn);

    snowList.appendChild(li);
  }

  function sendTask(){
    main.remove();

    const backBtn = createCustomElement('button', 'Back', 'back-btn');
    backBtn.addEventListener('click', function(event){
      backImage.hidden = true;
      const btn = event.currentTarget;
      btn.remove();
      body.appendChild(main);
      addBtn.disabled = false;
      snowList.innerHTML = '';
    })

    body.appendChild(backBtn);
    backImage.hidden = false;
  }

  function loadEdit(event){
    const li = event.currentTarget.parentNode.parentNode;
    li.remove();

    addBtn.disabled = false;
    nameInput.value = li.querySelectorAll('p')[0].textContent.split('Name: ')[1];
    heightInput.value = li.querySelectorAll('p')[1].textContent.split('Height: ')[1];
    locationInput.value = li.querySelectorAll('p')[2].textContent.split('Location: ')[1];
    creatorInput.value = li.querySelectorAll('p')[3].textContent.split('Creator: ')[1];
    specialInput.value = li.querySelectorAll('p')[4].textContent.split('Attribute: ')[1];
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