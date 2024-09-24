// Get the necessary elements
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

// Add a new task to the list
addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a "delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#dc3545';
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '4px';
    deleteButton.style.padding = '4px 8px';
    
    // Append the delete button to the list item
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    // Clear the input field
    newTaskInput.value = '';

    // Toggle task completion
    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Delete the task
    deleteButton.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the li click event
        taskList.removeChild(li);
    });
});
