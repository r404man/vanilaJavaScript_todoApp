const addBtn = document.getElementById('todo-btn');
var todoText = document.getElementById('todo-text');
var todoList = document.getElementById('todo-list');
var idTask = 0;
addBtn.addEventListener('click', function() { 
    let task = document.createElement('div');
    task.className = "task";
    task.setAttribute('id', `${idTask++}`);


    let taskText = document.createElement('div');
    taskText.className = "taskText";
    taskText.setAttribute('id', 'taskText');
    taskText.innerHTML = `${todoText.value}`;
    task.appendChild(taskText);


    todoList.appendChild(task);
});

