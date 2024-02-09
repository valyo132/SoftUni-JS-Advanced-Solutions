window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const ageInput = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genreSelect = document.getElementById('genre');
  const storyInput = document.getElementById('story');
  const main = document.getElementById('main');

  const previewList = document.getElementById('preview-list');

  const publishBtn = document.getElementById('form-btn');

  publishBtn.addEventListener('click', function(){
      let isValid = firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && ageInput.value > 0 
        && storyTitle.value.length > 0 && storyInput.value.length > 0;

      if (isValid){
        const li = createCustomElement('li', 'none', 'story-info');

        const article = createCustomElement('article', 'none', 'none');
        article.appendChild(createCustomElement('h4', `Name: ${firstNameInput.value} ${lastNameInput.value}`, 'none'));
        article.appendChild(createCustomElement('p', `Age: ${ageInput.value}`, 'none'));
        article.appendChild(createCustomElement('p', `Title: ${storyTitle.value}`, 'none'));
        article.appendChild(createCustomElement('p', `Genre: ${genreSelect.value}`, 'none'));
        article.appendChild(createCustomElement('p', `${storyInput.value}`, 'none'));

        li.appendChild(article);

        const saveBtn = createCustomElement('button', 'Save Story', 'save-btn');
        saveBtn.addEventListener('click', saveStory);
        const editBtn = createCustomElement('button', 'Edit Story', 'edit-btn');
        editBtn.addEventListener('click', loadEdit);
        const deleteBtn = createCustomElement('button', 'Delete Story', 'delete-btn');
        deleteBtn.addEventListener('click', deleteStory);

        li.appendChild(saveBtn);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);

        previewList.appendChild(li);

        publishBtn.disabled = true;
        firstNameInput.value = '';
        lastNameInput.value = '';
        ageInput.value = '';
        storyTitle.value = '';
        storyInput.value = '';
      }
  });

  function deleteStory(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    publishBtn.disabled = false;
  }

  function saveStory(){
    main.innerHTML = '<h1>Your scary story is saved!</h1>';
  }

  function loadEdit(event){
    const li = event.currentTarget.parentNode;
    li.remove();

    let name = li.querySelectorAll('article h4')[0].textContent.split('Name: ')[1];

    firstNameInput.value = name.split(' ')[0];
    lastNameInput.value = name.split(' ')[1];
    ageInput.value = li.querySelectorAll('article p')[0].textContent.split('Age: ')[1];
    storyTitle.value = li.querySelectorAll('article p')[1].textContent.split('Title: ')[1];
    genreSelect.value = li.querySelectorAll('article p')[2].textContent.split('Genre: ')[1];
    storyInput.value = li.querySelectorAll('article p')[3].textContent;

    publishBtn.disabled = false;
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