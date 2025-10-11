let stringButton = document.getElementById("stringReverse");
let palindrome = document.getElementById("palindrome");
let tips = document.getElementById("tips");

let projectONE = document.getElementById("project1");
let projectTWO = document.getElementById("project2");
let projectTHREE = document.getElementById("project3");


function stringProjectOpen(){
    projectONE.className = "projectON";
    projectTWO.className = "projectOFF";
    projectTHREE.className = "projectOFF";
}
function palindromeProjectOpen(){
    projectONE.className = "projectOFF";
    projectTWO.className = "projectON";
    projectTHREE.className = "projectOFF";
}
function tipsProjectOpen(){
    projectONE.className = "projectOFF";
    projectTWO.className = "projectOFF";
    projectTHREE.className = "projectON";
}

stringButton.addEventListener("click", stringProjectOpen);
palindrome.addEventListener("click", palindromeProjectOpen);
tips.addEventListener("click", tipsProjectOpen);