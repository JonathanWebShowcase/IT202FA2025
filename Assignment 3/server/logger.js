var url = "http link here";

function log(message){
    //Send an HTTP request
    console.log(message);
}

/*
Both of these things are scoped to this own module right now 
but 
we can access this module from another module using export to export whatever is in the 
module and can be used outside of the module 
*/

module.exports.log = log;
module.exports.endPointUrl = url; //after the . is a name you want to give it 