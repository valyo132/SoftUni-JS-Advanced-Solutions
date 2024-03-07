const url = "http://localhost:3030/jsonstore/collections/books/";

async function attachEvenst() {
  document.getElementById("loadBooks").addEventListener("click", load);
  document.querySelector("form button").addEventListener("click", postBook);
}

async function postBook(event) {
  event?.preventDefault();

  const [titleInput, authorInput] = document.querySelectorAll("input");

  if (titleInput.value.length > 0 && authorInput.value.length > 0) {
    let title = titleInput.value.trim();
    let author = authorInput.value.trim();

    try {
      await fetch(url, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author, title }),
      });

      titleInput.value = "";
      authorInput.value = "";
    } catch (error) {
      alert(error.message);
    }
  }
}

async function load() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  const res = await fetch(url);
  const data = await res.json();

  for (const [_id, obj] of Object.entries(data)) {
    const tr = createCustomElement("tr", "", "");
    tr.id = _id;
    tr.appendChild(createCustomElement("td", obj.title, ""));
    tr.appendChild(createCustomElement("td", obj.author, ""));

    const btns = createCustomElement("td", "", "");
    const editBtn = createCustomElement("button", "Edit", "");
    editBtn.addEventListener("click", editBook);
    const deleteBtn = createCustomElement("button", "Delete", "");
    deleteBtn.addEventListener("click", deleteBook);
    btns.appendChild(editBtn);
    btns.appendChild(deleteBtn);

    tr.appendChild(btns);
    tbody.appendChild(tr);
  }
}

async function deleteBook(event) {
  const id = event.currentTarget.parentNode.parentNode.id;

  await fetch(url + id, {
    method: "delete",
  });
}

async function editBook(event) {
  document.querySelector("h3").textContent = "Edit FORM";
  document.querySelector("form button").textContent = "Save";
  const id = event.currentTarget.parentNode.parentNode.id;

  const res = await fetch(url + id);
  const data = await res.json();

  const [titleInput, authorInput] = document.querySelectorAll("input");
  titleInput.value = data.title;
  authorInput.value = data.author;

  const saveButton = document.querySelector("form button");
  saveButton.removeEventListener("click", postBook);

  saveButton.addEventListener("click", async (event) => {
    event?.preventDefault();

    if (titleInput.value.length > 0 && authorInput.value.length > 0) {
      let title = titleInput.value.trim();
      let author = authorInput.value.trim();

      try {
        const res = await fetch(url + id, {
            method: "PUT",
            headers: { 
                'Content-type': 'application/json'
              }, 
            body: JSON.stringify({ author: author, title: title }),
          }).then(async () => {
            titleInput.value = "";
            authorInput.value = "";
            document.querySelector("h3").textContent = "FORM";
            document.querySelector("form button").textContent = "Submit";
          });
      } catch (error) {
        alert(error.message);
      }
    }
  });
}

function createCustomElement(type, content, classOf) {
  let item = document.createElement(type);

  if (content != "") {
    item.textContent = content;
  }

  if (classOf != "") {
    item.classList.add(classOf);
  }

  return item;
}

attachEvenst();
