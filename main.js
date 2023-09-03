const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}


document.querySelector("#Button").onclick = function(){
  let count =0;
   
  btn.textContent="button clicked";


}