import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = "http://localhost:3030/jsonstore/advanced/table";

const trTemplate = (obj) => html`
  <tr>
    <td>${obj.firstName} ${obj.lastName}</td>
    <td>${obj.email}</td>
    <td>${obj.course}</td>
  </tr>
`;

const root = document.querySelector("tbody");

async function solve() {
  await loadItems();
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick(e) {
    e?.preventDefault();
    const searchTerm = document.getElementById('searchField')
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      let found = false;
      cells.forEach((cell) => {
        if (cell.textContent.toLowerCase().includes(searchTerm.value)) {
          found = true;
        }
      });
      if (found) {
        row.classList.add("select");
      } else {
        row.classList.remove("select");
      }
    });
    searchTerm.value = '';
  }
}

async function loadItems() {
  const data = await getItems();
  render(
    Object.values(data).map((el) => trTemplate(el)),
    root
  );
}

async function getItems() {
  const res = await fetch(url, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
}

//TODO
async function postItem() {
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/jspn",
    },
    body: JSON.stringify({}),
  });
}

await solve();
