let activatorButtonSTR = document.getElementById("reverseButton");
let output = document.getElementById("reverseStringOutput");

function stringReverser(){
    let original = document.getElementById("stringInput").value;
    console.log(original);
    let reversed = "";

    let size = original.length - 1;
    console.log(size);

    for(let i = size; i > -1; i--){
        reversed += original[i];
        console.log(original[i]);
        console.log("inside Loop + " + i);
    }

    output.textContent = reversed;
    console.log(reversed);
}

activatorButtonSTR.addEventListener("click", stringReverser);