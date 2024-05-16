//let add = document.getElementById("#add")
let listbox = document.getElementById("listbox")
let inputbox = document.getElementById("inputbox")

function button() {
    var x = document.createElement("li");
    document.getElementById("list").append(x);
    
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.innerHTML = ("list")
    document.getElementById("list").append(x);
  }