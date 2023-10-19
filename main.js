
const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

var cantPendientes = document.querySelector('.tareasPendientes');
var contTareas = 0;
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = text;
    li.appendChild(p);
    ul.appendChild(li);
    li.appendChild(addDeleteBtn());
    input.value = "";
    contTareas = contTareas + 1;
    cantPendientes.textContent = `Tareas pendientes: ${contTareas}`;

  }
})

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    const items = document.querySelectorAll("li");

    if (items.lenght === 0) {
      empty.style.display = "block";

    }
    contTareas = contTareas - 1;
    if (contTareas == 0) {
      cantPendientes.textContent = "No tiene tareas pendientes";
    }
    else {
      cantPendientes.textContent = `Tareas pendientes: ${contTareas}`;      
    }

  });
  return deleteBtn;

}

