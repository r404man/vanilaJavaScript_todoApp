const addBtn = document.getElementById('todo-btn');
var todoText = document.getElementById('todo-text');
var todoList = document.getElementById('todo-list');
var idTask = 0;
var taskDate = new Date();
var todoFinishedList = document.getElementById('todo-finish-list');

addBtn.addEventListener('click', function () {
    if (todoText.value == "" || todoText.value[0] == "<") {
        alert('Plz insert data !');
        todoText.style.border = `1px solid red`;
    }
    else {
        // add main task 
        let task = document.createElement('div');
        task.className = "task";
        task.setAttribute('id', `${idTask++}`);

        // add task text
        let taskText = document.createElement('div');
        taskText.className = "taskText";
        taskText.setAttribute('id', 'taskText');
        taskText.innerHTML = `${todoText.value}`;
        task.appendChild(taskText);

        // add edit task button 
        
        let editTask = document.createElement('div');
        editTask.classList = 'editTask';
        editTask.setAttribute('id', 'editTask');
        editTask.innerHTML = 'Edit';
        task.appendChild(editTask);

        editTask.addEventListener('click', function() {

            taskText.style.display = "none";
            checkTask.style.display = "none";
            removeTask.style.display = "none";
            editTask.style.display = "none";

            task.style.flexDirection = "row-reverse";
            
            let acceptBtn = document.createElement('div');
            acceptBtn.classList = 'acceptBtn';
            acceptBtn.setAttribute('id', 'acceptBtn');
            task.appendChild(acceptBtn);

            acceptBtn.addEventListener('click', function() {
                if(editInput.value == "") {
                    todoList.removeChild(task);
                }

                taskText.innerHTML = `${editInput.value}`;
                

                taskText.style.display = "inline";
                checkTask.style.display = "inline";
                removeTask.style.display = "inline";
                editTask.style.display = "inline";

                this.style.display = "none";
                cancelBtn.style.display = "none";
                editInput.style.display = "none";
                task.style.flexDirection = "";

           
            });

            let cancelBtn = document.createElement('div');
            cancelBtn.classList = 'cancelBtn';
            cancelBtn.setAttribute('id', 'cancelBtn');
            task.appendChild(cancelBtn);

            cancelBtn.addEventListener('click', function() {
                taskText.style.display = "inline";
                checkTask.style.display = "inline";
                removeTask.style.display = "inline";
                editTask.style.display = "inline";

                this.style.display = "none";
                acceptBtn.style.display = "none";
                editInput.style.display = "none";
                task.style.flexDirection = "";
            });

            let editInput = document.createElement('input');
            editInput.classList = 'editInput';
            editInput.setAttribute('id', 'editInput');
            editInput.value = taskText.innerHTML;
            task.appendChild(editInput);
        

           

        });

        // add checkbox task  

        let checkTask = document.createElement('input');
        checkTask.setAttribute('type', "checkbox");
        checkTask.classList = 'checkTask';
        task.appendChild(checkTask);

        checkTask.addEventListener('click', function () {
            if (this.checked == true) {
                taskText.style.opacity = 0.3;
                taskText.style.textDecoration = "line-through";
                task.style.opacity = 0.7;

                todoList.removeChild(task);
                todoFinishedList.appendChild(task);


                removeTask.addEventListener('click', function () {
                    todoFinishedList.removeChild(task);
                });
            }
            else {
                taskText.style.opacity = 1;
                taskText.style.textDecoration = "none";
                task.style.opacity = 1;
                todoFinishedList.removeChild(task);
                todoList.appendChild(task);
            }
        });

        // add remove task button 

        var removeTask = document.createElement('div');
        removeTask.setAttribute('id', 'removeTask');
        removeTask.className = "removeTask";
        task.appendChild(removeTask);

        removeTask.addEventListener('click', function () {
            todoList.removeChild(task);
        });

        todoList.appendChild(task);

        todoText.value = "";
        todoText.style.border = "2px solid #000";
    }



});

