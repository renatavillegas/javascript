// we need to run it by live-server 
document.getElementById('form-note');
function AddNote(e) {
  alert("the button was pressed!!!");
  e.preventDefault(); 
}


function SaveNote(e) {
  var note = document.getElementById('myTextAreaNote').value;
  var title = document.getElementById('myTextAreaTitle').value;
  window.alert(title);
  //add callout
  // search father element
  var body = document.getElementById('body');
  // create callout
  var callout = document.createElement('div');
  callout.className = "callout"
  callout.id = title
  //create callout-header
  var calloutHeader = document.createElement('div');
  calloutHeader.className= "callout-header"
  calloutHeader.id = title+'header'
  var text = document.createTextNode("New note!")
  calloutHeader.appendChild(text) 
  callout.appendChild(calloutHeader)
  //create close butoon 
  var closeButton = document.createElement("button")
  closeButton.innerHTML = 'x'
  closeButton.onclick = function () {
    closeButton.parentElement.style.display='none';
  };
  callout.appendChild(closeButton)
  //create the text part - callout container
  var calloutContainer = document.createElement('div')
  calloutContainer.className = 'sticky-form'
  var text = document.createTextNode(note)
  calloutContainer.appendChild(text)
  // append the note to the div 
  callout.appendChild(calloutContainer)
  // append the element to the body 
  body.appendChild(callout);
  // listening events: 
  //Make the DIV element draggagle:
  dragElement(document.getElementById(title));

}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}