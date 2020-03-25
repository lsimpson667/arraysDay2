let superMales = document.getElementsByClassName("male");
let superFemales = document.getElementsByClassName("female");
let superhero = document.getElementsByClassName("superhero");
let description = document.getElementsByClassName("description");

for(let i = 0; i < superhero.length; i++) {
superMales[i].style.color = "red";
superFemales[i].style.color = "blue";
description[i].style.backgroundColor = "yellow";
description[i].style.border = "2px solid black";
description[i].style.borderRadius = "25px";

if (i < superhero.length) {
    document.getElementById("printLater").innerHTML = "Who is the greatest of all time?";
} else {
    document.getElementById("printLater").innerHTML = "";
}

} 
