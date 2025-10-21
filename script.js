const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        
        taskList.appendChild(listItem);

       
        taskInput.value = '';
    }
});


taskList.addEventListener('click', (event) => {
 
    if (event.target.tagName === 'SPAN') {
        event.target.parentNode.classList.toggle('completed');
    }
    
  
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentNode.remove();
    }
});
