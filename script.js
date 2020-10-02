/* 
  ADA School © 2020
  Pre course: intro to Javascript
*/

// Add a "checked" symbol when clicking on a list item
let list = document.getElementById('tasks-list');
console.log(list)
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function addNewTask() {
  let listItem = document.createElement("li");
  let inputValue = document.getElementById("task-description").value;
  let textNode = document.createTextNode(inputValue);
  listItem.appendChild(textNode);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasks-list").appendChild(listItem);
  }
  document.getElementById("task-description").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function() { hideElement(this) }
  span.appendChild(txt);
  listItem.appendChild(span);
}


function hideElement(element){
  var div = element.parentElement;
   div.style.display = "none";
}
