let calcButton = document.getElementById("calculatorButton");
let outputCALC = document.getElementById("calculatorOutput1");
let outputCALCTwo = document.getElementById("calculatorOutput2");
let outputCALCThree = document.getElementById("calculatorOutput3");

function calcButtonPress(){
    let subtotal = parseFloat(document.getElementById("calcSUBInput").value);
    let tipPER = parseFloat(document.getElementById("calcTIPInput").value);

    tipTotal = subtotal * (tipPER/100);

    total = subtotal + tipTotal;

    outputCALC.textContent = "Subtotal : " + subtotal;
    outputCALCTwo.textContent = "Tip : " + tipTotal;   
    outputCALCThree.textContent = "Total : " + total;

}

calcButton.addEventListener("click", calcButtonPress);