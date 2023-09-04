let textarea=document.querySelector('#textArea');

document.querySelector("#Button").onclick  = function () {
    textarea.style ="font-size: 24pt"
};

document.querySelector("#fancy").onclick  = function () {
    textarea.style.color="blue";
    textarea.style.textDecoration="underline"

}

document.querySelector("#boring").onchange  = function () {
    textarea.style.color="black";
    textarea.style.textDecoration="none"


}

document.querySelector("#Moo").onclick  = function () {
    textarea.style.color="blue";
    textarea.style= "text-transform: uppercase";
    let str=textarea.value.split(".");
    let str1=str.join("-Moo");
    textarea.value=str1;
}
