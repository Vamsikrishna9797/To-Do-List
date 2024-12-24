// Select DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Mark task as completed on click
    taskItem.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    // Delete task on button click
    taskItem.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

// Event listener for the Add Task button
addTaskBtn.addEventListener('click', addTask);

// Allow adding tasks by pressing Enter
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
