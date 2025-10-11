let activatorButtonSTR = document.getElementById("reverseButton");
let output = document.getElementById("reverseStringOutput");

function stringReverser(){
    let original = document.getElementById("stringInput").value;
    console.log(original);
    let reversed = original.split('').reverse().join('');
    /*
    EXPLINATION
    - original holds string
    - split will split the string into char
    - reverse will reverse the order
    - join will join them into one string again
    */

    output.textContent = reversed;
}

activatorButtonSTR.addEventListener("click", stringReverser);