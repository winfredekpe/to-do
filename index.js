new WOW().init();

// variables;

let addbtn = document.querySelector(".btn");
let input = document.querySelector("#input");
let items = document.querySelector(".items");

// functions

function add() {
  //  creating the nodes

  let text = input.value;
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

  //   appending
  format.appendChild(edit);
  format.appendChild(del);
  item.appendChild(l);
  l.innerText = text;
  item.appendChild(format);
  items.appendChild(item);
}
