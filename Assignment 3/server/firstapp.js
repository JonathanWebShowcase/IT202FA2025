/*
NOTES

source: https://www.youtube.com/watch?v=TlB_eWDSMt4

- Node is a runtime enviorment 
- Express is a library that simplifies making node servers
- Node must be installed on machine and then initialized 
- Node is a C++ application which runs the chrome V8 engine to run javascript in non browser enviorments.
when you use the keyword node plus command it feeds whatever that command does into the v8 engine to execute the js 
- Modules are small building blocks used to hold functions and variables similar to OOP with data encapsulation
Every file is considered a module 

*/

function sayHello(){
    console.log("hello world");
}

// sayHello();

var messege = "yo mama";

/*
-File Scope is important variables defined are only stored on the 
file it was defined on unless specified using
*/

// console.log(module); //Will show you everything thats inside the module object

/*
every function and variable defined in a module(file) is scoped to that file
*/

/*
to load a module you need to use require which is the same as PHP where you basically use stuff from another file 
*/
var logger = require('./logger.js');

console.log(logger);

logger.log("tester string");