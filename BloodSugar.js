let button = document.querySelector('#RecordButton');
let name = document.querySelector('#nameInput');
let BloodSugar = document.querySelector('#BloodSugarInput');
let inputField = document.querySelector('#flex');


let today = new Date().toLocaleDateString()
console.log(today);
button.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    let forrmated = ""+name.value+"'s"+" Blood Sugar Level is "+BloodSugar.value+" on "+today;
    paragraph.classList.add('flex');
    paragraph.innerText=forrmated;
    inputField.appendChild(paragraph);
})