var input = document.getElementById('listItem');
var list = document.getElementById('todoList');

function add(event){
    var listItem = input.value;
    var div = document.createElement('div');
    div.append(listItem);
    div.classList.add("items");
    div.innerHTML += "<button class='btn done' onclick='del(event)'>DONE</button>";
    list.append(div);
}

function del(event){
    event.target.parentElement.remove();
}