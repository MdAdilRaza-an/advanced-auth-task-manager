let tasks = [];

function saveTasks(){

    localStorage.setItem(
        'tasks',
        JSON.stringify(tasks)
    );
}

function loadTasks(){

    const oldTasks =
    localStorage.getItem('tasks');

    if(oldTasks){

        tasks =
        JSON.parse(oldTasks);

        tasks.forEach(task => {

            createTaskElement(task);
        });
    }
}

function addTask(){

    const taskInput =
    document.getElementById('taskInput');

    const taskText =
    taskInput.value;

    if(taskText === ''){

        alert('Enter Task');

        return;
    }

    const task = {

        text:taskText,
        completed:false
    };

    tasks.push(task);

    saveTasks();

    createTaskElement(task);

    taskInput.value = '';
}

function createTaskElement(task){

    const li =
    document.createElement('li');

    if(task.completed){

        li.classList.add('complete');
    }

    li.innerHTML = `

        <span>${task.text}</span>

        <div class="task-buttons">

            <button onclick="completeTask(this)">
                Done
            </button>

            <button onclick="deleteTask(this)">
                Delete
            </button>

        </div>
    `;

    document
    .getElementById('taskList')
    .appendChild(li);
}

function completeTask(button){

    button.parentElement
    .parentElement
    .classList.toggle('complete');
}

function deleteTask(button){

    button.parentElement
    .parentElement
    .remove();
}

loadTasks();