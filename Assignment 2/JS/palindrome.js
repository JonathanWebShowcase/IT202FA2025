let activatorButtonPAL = document.getElementById("palindromeButton");
let outputPAL = document.getElementById("palindromeOutput");

function palindromeChecker(){
    let palindrome = parseInt(document.getElementById("palindromeInput").value);
    let reversedPAL = parseInt(palindrome.toString().split("").reverse().join(""));

    let value = palindrome / reversedPAL;
    if (value == 1){
        outputPAL.textContent = "This Is Palindrome";
    }
    else {
        outputPAL.textContent = "This Is Not Palindrome";
    }

    /*
    EXPLINATION
    - original holds string
    - split will split the string into char
    - reverse will reverse the order
    - join will join them into one string again
    */
}

activatorButtonPAL.addEventListener("click", palindromeChecker);