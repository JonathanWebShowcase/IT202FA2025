//Initialize the stuff



var express = require("express"); // This loads express onto this module that we already have downloaded on the server
var cors = require("cors"); //This handles all the nasty CORS policy stuff

var app = express(); // calls the express function that we got from above to create an instance of express 
var port = 3000; //holds port number that the server is listening to, a port is like a door that the server has a doorbell on

let selectedProducts = [];
const products = [
    { id: 1, name: "Racoon", image: "http://localhost:3000/images/racoon.jpg", price: 16.76, description: "Friendly trash panda" },
    { id: 2, name: "Red Panda", image: "http://localhost:3000/images/redPanda.jpg", price: 29.14, description: "Friendly Red Panda" },
    { id: 3, name: "Tiger", image: "http://localhost:3000/images/tiger.jpg", price: 31.32, description: "Maybe Friendly Big Cat" },
    { id: 4, name: "Small Demon", image: "http://localhost:3000/images/demon.jpg", price: 44.52, description: "Will Make Neighbors Mad" }
];


//Set up routings and requirments 



app.use(cors());
app.use(express.json());
app.use('/images', express.static(__dirname + '/images'));


app.get("/api/products", getProducts);
app.post("/api/select-product", selectProduct);
app.get("/api/selected-product", selectedItem);
app.post("/api/submit-order", submitOrder);
app.listen(port, onServerStart);



//Function Definitions


//Server Start Function
function onServerStart(){
    console.log("Hello World The Server is Working on port " + port);
}

// Returns list of 4 products
function getProducts(req, res) {
    res.json(products);
}

// Stores the last selected product
function selectProduct(req, res) {
    //Each Product has an ID and you just have to loop through the items and find the id
    let listOfProducts = products;
    let selectedItemID = parseInt(req.body.productID);
    console.log(selectedItemID)
    if(selectedItemID > 1 || selectedItemID < 4){
        console.log("working condition");
        for(let i = 0; i < listOfProducts.length; i++){
            if(listOfProducts[i].id == selectedItemID){
                //if you find it push it onto the temporary array variable we set up
                selectedProducts = listOfProducts[i];
                res.json(
                    {
                        message: "Success",
                        data: selectedProducts
                    }
                )
            }
        }
    }
    else{
        res.json(
                    {
                        message: "Error"
                    }
                )
    }
}

// Returns the last selected product
function selectedItem(req, res) {
    if(selectedProducts.length > 0){
        res.json(
            {
                message:"Success",
                data: selectedProducts
            }
        );
    }
    else{
        res.json(
            {
                message:"Error"
            }
        )
    }
}

// Handles order submission
function submitOrder(req, res) {
    res.json(
            {
                message:"Your Item Will Be Delivered Soon"
            }
        )
}
