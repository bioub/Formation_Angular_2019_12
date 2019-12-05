/** @type {HTMLFormElement} */
const formElt = document.querySelector('.todo-form');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');

/** @param {Event} event */
function addTodo(event) {
  event.preventDefault();
  const inputElt = formElt.querySelector('input');

  todoItem({
    id: Math.random(),
    title: inputElt.value,
    completed: false,
  });
}

function todoItem(todo) {
  const todoItemElt = document.createElement('div');
  todoItemElt.className = 'todo-item';

  const inputElt = document.createElement('input');
  inputElt.value = todo.title;
  todoItemElt.appendChild(inputElt);

  const buttonElt = document.createElement('button');
  buttonElt.innerText = '-';
  todoItemElt.appendChild(buttonElt);

  buttonElt.addEventListener('click', ($event) => {
    console.log(todo.title);
    listElt.removeChild(todoItemElt);
  });

  listElt.appendChild(todoItemElt);
}

formElt.addEventListener('submit', ($event) => {
  addTodo($event);
})
