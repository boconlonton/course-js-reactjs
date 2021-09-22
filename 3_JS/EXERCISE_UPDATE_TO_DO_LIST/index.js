var inputTask = document.getElementById("task-input");
var btnAddTask = document.getElementById("add-task");
var btnRemoveFirstTask = document.getElementById("remove-first-task");
var btnUpdateFirstTask = document.getElementById("update-first-task");
var btnRemoveSpecificTask = document.getElementsByClassName("btn-remove-specific-task"); 
var listTask = document.getElementById("to-do-list");

var currentInputValue = '';

function createNewNode() {
    count = listTask.childElementCount;
    console.log(count);
    var newListItem = document.createElement('li');
    var newDeleteButton = document.createElement('button');
    var newTask = document.createTextNode(currentInputValue);
    newListItem.appendChild(newTask);
    newDeleteButton.innerHTML = 'Delete';
    newDeleteButton.style.marginLeft = '10px';
    newDeleteButton.id = count;
    newListItem.appendChild(newDeleteButton);
    newListItem.id = 'task' + count;
    newDeleteButton.addEventListener('click', function(e){
        taskID = 'task' + e.target.id;
        element = document.getElementById(taskID);
        listTask.removeChild(element);
    });
    return newListItem;
}

addElement = function (){
    if (currentInputValue !== undefined && currentInputValue !== null 
        && currentInputValue !== ''){
        var newListItem = createNewNode();
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
    if (e.key !== undefined) {
        if (e.key === 'Enter'){
            addElement();
        };
    } else if (e.keyIdentifier !== undefined) {
        if (e.keyIdentifier === 13){
            addElement();
    };
    } else if (e.keyCode !== undefined) {
        if (e.keyCode === 13){
            addElement();
        };
    }
    
});

btnAddTask.addEventListener('click', addElement);
btnUpdateFirstTask.addEventListener('click', function(){
    var firstElement = listTask.firstElementChild;
    if (firstElement){
        var newTask = createNewNode();
        listTask.replaceChild(newTask, firstElement);
    }
});
btnRemoveFirstTask.addEventListener('click', function(){
    var firstElement = listTask.firstElementChild;
    if (firstElement){
        listTask.removeChild(firstElement);
    }
})