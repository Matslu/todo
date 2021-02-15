//adding new item on tasks-list with close button

function newLi() {
    const listItem = document.createElement("li");
    const input = document.getElementById("myInput").value;
    const t = document.createTextNode(input);
    listItem.appendChild(t);
    let choosing = document.getElementById("selectBtn");
    if (input === '') {
        alert("Write a correct task!");
    } else {
        document.getElementById(choosing.options[choosing.selectedIndex].value).appendChild(listItem);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    listItem.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
  
};
 // making "X" delete item from list

let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}






