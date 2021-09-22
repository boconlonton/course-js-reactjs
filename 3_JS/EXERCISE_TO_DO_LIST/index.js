var inputTask = document.getElementById("task-input");
var btnAddTask = document.getElementById("add-task");
var listTask = document.getElementById("to-do-list");

var count = 0;

var currentInputValue = '';

addElement = function (){
    if (currentInputValue !== undefined && currentInputValue !== null 
        && currentInputValue !== ''){
        var newListItem = document.createElement('li');
        var newTask = document.createTextNode(currentInputValue);
        newListItem.appendChild(newTask);
        newListItem.id = count + 1;
        listTask.appendChild(newListItem);
        inputTask.value = '';
        currentInputValue = '';
    }
    else
    {
        alert('Please enter task name');
    };
}

inputTask.addEventListener('input', function(e){
    currentInputValue = e.target.value;
});

inputTask.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addElement();
    };
});

btnAddTask.addEventListener('click', addElement);