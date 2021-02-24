
const log = console.log;
const randomNumber = () => Math.floor(Math.random()*16);

function creat_div(id_name, class_name, parent) {
    let elem = document.createElement("div");
    elem.id = id_name;
    elem.className = class_name;
    parent.appendChild(elem);
    return elem
}

function creat_p(id_name, class_name, parent, text){
    let elem = document.createElement("p");
    elem.id = id_name;
    elem.className = class_name;
    parent.appendChild(elem);
    elem.innerText = text;
}

function creat_a(id_name, class_name, parent, text, text_link){
    let elm = document.createElement("a");
    let link = document.createTextNode(text);
    elem.id = id_name;
    elem.className = class_name;
    elm.appendChild(link);  
    elm.href = text_link;  
    parent.appendChild(elem);
}

function creat_button(id_name, class_name, parent, text){
    let elem = document.createElement("button");
    elem.id = id_name;
    elem.className = class_name;
    elem.innerText = text;
    parent.appendChild(elem);
}