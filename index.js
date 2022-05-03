//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo');




//event listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOptions.addEventListener('click', filterTodo);





//functions
function addTodo(event) {
    //prevent default refreshing
    event.preventDefault();

    //create todoDiv
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');

    //    create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')
    tododiv.appendChild(newTodo);

   
    //create check mark button
    const checkedBotton = document.createElement('button');
    checkedBotton.innerHTML = '<i class="fas fa-check"></i>';
    checkedBotton.classList.add('check-btn');
    tododiv.appendChild(checkedBotton);

    //create trash button
    const deleteBotton = document.createElement('button');
    deleteBotton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBotton.classList.add('delete-btn');
    tododiv.appendChild(deleteBotton);

    //append todoDiv as child to todoList

    todoList.appendChild(tododiv);

    //clear todo input value after been listed

    todoInput.value = "";
}


function deleteCheck(e) {
    e.preventDefault();

    const item = e.target;

    //create delete button
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;

        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }


    //create check button
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//create filterTodo

function filterTodo(e) {
    const todos = todoList.childNodes;
    // todos.forEach((item) => {
    //     console.log(item, 'uiu')
    // })
    todos.forEach(function (todo) {
        console.log(todo.textContent, 'here')
        if(!todo.textContent.trim()) return;
        console.log(todo.style, 'uiu')
        // if(!todo) return;
        switch(e.target.value) {

            case "all":
                 todo.style.display ="flex";
                break;

            case "completed":
                console.log(todo.classList, 'class list')
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                } else { todo.style.display = "none"; }
                break;

            case "uncompleted":
                console.log(todo.classList, 'class list')
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";

                } else { todo.style.display = "none"; }
                break;
        }
    });
}

