const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {

    var todo = prompt('sss');
    var li = document.createElement('li');
    var li = document.createElement('input');
    li.type = "checkbox";
    li.value = 1;
    li.name = "todo[]";
    list.appendChild(li);
    list.appendChild(document.createTextNode(todo));
}
