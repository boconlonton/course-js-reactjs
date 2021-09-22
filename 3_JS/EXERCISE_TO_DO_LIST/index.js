var inputTask = document.getElementById("task-input");
var btnAddTask = document.getElementById("add-task");
var listTask = document.getElementById("to-do-list");

var count = 0;

addElement = function (value){
    if (!value){
        alert('Please enter task name')
    }
    else
    {
        var newListItem = document.createElement('li');
        var newTask = document.createTextNode(value);
        newListItem.appendChild(newTask);
        newListItem.id = count + 1;
        listTask.appendChild(newListItem);
    };
}
btnAddTask.addEventListener('click', function() {
    addElement(inputTask.value);
})

inputTask.addEventListener('keyup', function(e){
    if (e.keyCode === 13){
        addElement(inputTask.value);
    }
});

inputTask.addEventListener('focus', function(){
    inputTask.value = '';
})
