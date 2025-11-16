const TXTurl = 'http://localhost:3000/counter';
const BMIurl = 'http://localhost:3000/bmicalculator';
let txtUploadBox = document.getElementById("txtFileUpload");
let lbsUploadBox = document.getElementById("weightInput");
let feetUploadBox = document.getElementById("feetInput");
let inchesUploadBox = document.getElementById("inchesInput");
let sendTXTButtonBox = document.getElementById("sendTXTButton");
let sendBMIButtonBox = document.getElementById("sendBMIButton");

let bmiOutput = document.getElementById("bmi");
let vowelsOutput = document.getElementById("vowels");
let consonantsOutput = document.getElementById("consonants");

/*
NOTES:
an async function is a function that returns a promise while it runs in the background 
this lets it keep running in the background without slowing  down the code or crashing things if you cant get a response
this is why we need a try catch inside in order to process any errors that may come from it
*/
async function sendBMItoServer(){
    try {
    //values from form
    let weight = parseFloat(lbsUploadBox.value);
    let feet = parseFloat(feetUploadBox.value);
    let inches = parseFloat(inchesUploadBox.value);

    //build object
    let temp = {
        weight: weight,
        feet : feet,
        inches : inches
    }

    /*
    NOTES
    a header contains information for the server to know what kind of request you are making 
    as well as the data attatched to it inside of body:
    */
    let httpHeader = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(temp)
    }

    //again await keyword is a promise signifier waiting for the result of this
    let response = await fetch(BMIurl , httpHeader);
    //same here
    let BMIresults = await response.json();

    bmiOutput.textContent = BMIresults.bmi.toFixed(2);

    } catch(error){
        console.log ("The Berlin Wall Has Fallen" + error);
    }

}

async function sendTXTToServer(){
    try{
        let file = txtUploadBox.files[0]; //holds the file the user uploaded
        /*
        NOTES:
        when sending files you cant just use JSON you have to use something different called FormData
        */
        let formData = new FormData();//initializes the object
        formData.append("file", file);//Adds the file onto the object data "file" is the key name the server is expecting


        //remove content JSON/application in order to make this work 
        let httpHeaderTXT = {
            method: 'POST',
            body: formData
        }

        let response = await fetch(TXTurl , httpHeaderTXT);
        let TXTresults = await response.json();

        vowelsOutput.textContent = TXTresults.vowels;
        consonantsOutput.textContent = TXTresults.consonants;

    } catch(error){

    }
}


//Event Handlers

sendBMIButtonBox.addEventListener('click', sendBMItoServer);
sendTXTButtonBox.addEventListener('click', sendTXTToServer);
