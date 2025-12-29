// https://supersimplebackend.dev/product/first == href
// https: == protocol
// supersimplebackend.dev == host name
// /product/first == path name





let Open = document.getElementById('open');
let close = document.getElementById('close');
let container = document.getElementById('container');

Open.onclick = function () {
    container.classList.remove("hide");
    Open.classList.add("hide");
    close.classList.remove('hide');
}

close.onclick = function() {
    container.classList.add("hide");
    close.classList.add("hide");
    Open.classList.remove('hide');
    
}

let txt = document.getElementById('txt');
let mybtn = document.getElementById('click');

onload = function() {
    txt.focus();
    mybtn.style.background = 'yellow';
    mybtn.click();
}


let txt1 = document.getElementById('txt1');

if(localStorage.length > 0) {
    txt1.value = localStorage.getItem('txt1');
}

txt1.onkeyup = function() {
    localStorage.setItem('txt1', txt1.value);
}
