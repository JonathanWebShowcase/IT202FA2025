/*
NOTES:

Node Source : https://www.youtube.com/watch?v=TlB_eWDSMt4
Express Source : https://www.geeksforgeeks.org/node-js/express-js/
*/

var express = require("express"); // This loads express onto this module that we already have downloaded on the server
var cors = require("cors"); //This handles all the nasty CORS policy stuff
var fileUpload = require("express-fileupload"); //Handles file reading and whatnot Source:https://www.npmjs.com/package/express-fileupload
var app = express(); // calls the express function that we got from above to create an instance of express 
var port = 3000; //holds port number that the server is listening to, a port is like a door that the server has a doorbell on

// Initializing Server Stuff

/*
CANT HAVE THESE GLOBAL SINCE FORMDATA ISNT JSON AND WILL MAKE THE SERVER RETURN AN ERROR SINCE ITS EXPECTING EVERYREQUEST TO BE JSON
*/

/*
Source : https://www.geeksforgeeks.org/web-tech/express-js-express-json-function/
Allow the Express instance to handle JSON, This automatically parses any JSON responses and places it into req.body (followed below)
*/
//              app.use(express.json());
//tell the module to use express-fileupload
//              app.use(fileUpload());
//the firewall thing that you need to tell your computer its okay to allow traffic into in PHP I had the same issues
app.use(cors());

/*
NOTES
source: https://www.geeksforgeeks.org/node-js/explain-the-use-of-req-and-res-objects-in-express-js/

req - object containing information about request coming from the client
res - object containing information about your response to the client

when you create a router that is using .get or .post on your express instance you have to define the url endpoint and then the function you feed into it 
will determine what the names of these objects will be. first one is request the second one is response but I could call them whatever 

the function processTXT(req, res) will run when the server recieves a post request to that /counter address.

you can pass a middle parameter that tells it what kind of data its expected to process

*/
app.post("/counter", fileUpload() ,processTXT);

//same concept except we are routing the request to the 2nd problem of calculating BMI
app.post("/bmicalculator", express.json() ,calculateBMI)


//Starts your server and calls the function onServerStart on the port defined above.
app.listen(port, onServerStart);


//  ***Function Definitions***

function onServerStart(){
    console.log("Hello World The Server is Working");
}

//Function to process TXT
function processTXT(req, res){
    //grabs the file 
    let uploadedFile = req.files.file;
    //reads the file and turns it into a string
    let textSent = uploadedFile.data.toString("utf8");
    let vowels = ['A','E','I','O','U',];
    let consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    let vowelCounter = 0;
    let consonantCounter = 0;

    //Normalize data to only have to check for one set of ASCII characters
    let upperCaseText = textSent.toUpperCase();

    //Loop through for the lenght of the file 
    for (let i = 0; i < upperCaseText.length; i++){
        let character = upperCaseText[i];
        
        //check to see if the character is in either one of the conditions if not it doesnt add anything, this solves for spaces of punctuation
        if (vowels.includes(character)){
            vowelCounter++;
        }
        else if(consonant.includes(character)){
            consonantCounter++;
        }
    }

    res.json({
            vowels: vowelCounter,
            consonants: consonantCounter
        })
}

//Function to calculate BMI
function calculateBMI(req, res){
    /*
    reads the JSON built out on the front end 
    req.body holds the JSON object and then .weight accesses the value for the weight property
    */
    let weight = req.body.weight;
    let feet = req.body.feet;
    let inches = req.body.inches;
    //conversion
    let kg = weight * 0.453
    let totalHeight = inches + (feet * 12);
    let meters = totalHeight * 0.0254
    //calculate BMI
    let bmi = kg/(meters * meters);

    //build out response object by giving it a new JSON

    let data = {
        bmi: bmi
    }

    //sends back the response JSON object that was build out 
    res.json(data);
}