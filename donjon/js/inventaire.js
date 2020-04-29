var elementDrag = null
function allowDrop(ev,element) {
	elementDrag = element
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  elementDrag.appendChild(ev.target.firstChild)
  ev.target.appendChild(document.getElementById(data));
}