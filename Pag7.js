let tasks = JSON.parse(localStorage.getItem('tasks'))|| [];
let editIndex = null;

function renderTasks() {
    const table = document.getElementById('taskTable');
    table.innerHTML = '';
    tasks.forEach((task, index) => {
        table.innerHTML+= `
        <tr>
        <td>${task}</td>
        <td>
        <span class="edit" onclick="editTask(${index}))">Editar</span> 
        <span class="delete" onclick="deleteTask(${index})">Eliminar</span>
        </td>
        </tr>

        
        `;
        
    });
}

function addTask() {
    const input = document.getElementById('taskInput');
    const value = input.value.trim();
    if (value === '') return;

    if (editIndex === null) {
        tasks.push(value);
    } else {
        tasks[editIndex] = value;
        editIndex = null;
    }
    input.value = ''
    saveAndRender();
}

function editTask(index) {
    document.getElementById('taskInput').value = tasks[index];
    editIndex = index;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveAndRender();
}

function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();