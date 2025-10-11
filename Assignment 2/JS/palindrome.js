let activatorButtonPAL = document.getElementById("palindromeButton");
let outputPAL = document.getElementById("palindromeOutput");

function palindromeChecker(){
    let palindrome = document.getElementById("palindromeInput").value;
    let reversedPAL = palindrome.split('').reverse().join('');
    /*
    EXPLINATION
    - original holds string
    - split will split the string into char
    - reverse will reverse the order
    - join will join them into one string again
    */

    if (palindrome === reversedPAL){
        outputPAL.textContent = "This Is Palindrome";
    }
    else {
        outputPAL.textContent = "This Is Not Palindrome";
    }
}

activatorButtonPAL.addEventListener("click", palindromeChecker);