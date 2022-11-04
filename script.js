let a;
let b; 
let c;
/*
a = window.prompt("Enter side A");
a = number(a);

a = window.prompt("Enter side B");
a = number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("side C:", c);
*/

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

document.getElementById("cLabel").innerHTML = "Side C=" + c;
  
}