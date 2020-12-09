// creating an insrtance of wow.js
new WOW().init();

// variables;

let addbtn = document.querySelector(".btn");
let input = document.querySelector("#input");
let items = document.querySelector(".items");

// adding eventlisteners
addbtn.addEventListener("click", addItem);

// functions to handle the event when they occur

function addItem() {
  text = input.value;
  if (text === "") {
    alert("Please enter a todo");
  } else {
    todo = new Todo(text);
    todo.addtodo();
    input.value = "";
  }
}

// object for the todo items
function Todo(text) {
  this.text = text;

  this.addtodo = function () {
    // creating items and adding classes
    item = document.createElement("div");
    item.classList.add("item");
    l = document.createElement("div");
    l.classList.add("l");
    format = document.createElement("div");

    format.classList.add("format");
    edit = document.createElement("div");
    edit.classList.add("edit", "bounceInDown");
    del = document.createElement("div");
    del.classList.add("delete", "bounceInDown");

    //  adding event listeners

    del.addEventListener("click", removetodo);
    edit.addEventListener("click", update);

    // appending items
    format.appendChild(edit);
    format.appendChild(del);
    item.appendChild(l);
    l.innerText = this.text;
    item.appendChild(format);
    items.appendChild(item);
  };

  removetodo = function () {
    items.removeChild(this.parentNode.parentNode);
  };

  update = function () {
    edited = prompt("please input your update");
    if (edited === "please input your update") {
      alert("");
    } else if (!edited) {
      alert("please input your update");
    } else {
      this.parentNode.parentNode.firstChild.innerHTML = edited;
    }
  };
}
