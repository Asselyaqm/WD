let id = 0;
const todoList = document.querySelector('.todo-list');
const newTodoInput = document.querySelector('.create_new_todo-input');
const newTodoAddButton = document.querySelector('.create_new_todo-button');
let todosRemoveButton = document.querySelectorAll('.todo-remove_button');
let state = [
  {
    todoValue: 'todo - 1',
    id: id++
  },
  {
    todoValue: 'todo-2',
    id: id++
  }
]

function renderTodos(){
    let todos = '';
    todoList.innerHTML = '';
    for(let todo of state){
      todos += `
      <li class="todo">
            <input type="checkbox" class="todo_done-check" placeholder = 'New task'/>
            <span class="todo-text">${todo.todoValue}</span>
            <button class = 'todo-copy_button' data-id = ${todo.id}>
              copy
            </button>
            <button class="todo-remove_button" data-id = ${todo.id}>
              <i class="bi bi-trash3-fill"></i>
            </button>
          </li>
      `
    }
    
    todoList.insertAdjacentHTML("afterbegin", todos);
    renderEvent();
    copyEvent();
  
  todoList.insertAdjacentHTML("afterbegin", todos);
  renderEvent();
}

function renderEvent(){
  todosRemoveButton = document.querySelectorAll('.todo-remove_button');
  todosRemoveButton.forEach(item => {
    item.onclick = e => {
      e.preventDefault();
      let id = +item.dataset.id;
      state = state.filter(e => e.id != id);
      renderTodos();
    }
  })
}
function copyEvent(){
  todosRemoveButton = document.querySelectorAll('.todo-copy_button');
  todosRemoveButton.forEach(item => {
    item.onclick = e => {
      e.preventDefault();
      let id = +item.dataset.id;
      state.push({
        todoValue: state[id].todoValue, 
        id: state.length
      });
      renderTodos();
    }
  })
}

function createTodo(){
  let newTodoValue = newTodoInput.value.trim();
  if(!newTodoValue) return;
  state.push({
    todoValue: newTodoValue,
    id: id++
  })
  
  newTodoInput.value = '';
  renderTodos();
}


newTodoAddButton.onclick = (e) => {
  e.preventDefault();
  createTodo();
}

renderTodos()