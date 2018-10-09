// Create a new Node application called bamazonManager.js. Running this application will:


// List a set of menu options:
// View Products for Sale
// View Low Inventory
// Add to Inventory
// Add New Product
// If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
// If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
// If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

// SQL SET UP
require("console.table");
var mysql = require("mysql");
//CONNECTION
var connection = mysql.createConnection({
    host: "localhost",
    // Your port
    port: 8889,
    // Your username
    user: "root",
    // Your password
    password: "password",
    database: "bamazon"
  });
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    letsDoThis();
});
// INQUIRER SET UP
var inquirer = require("inquirer");

//MANAGER APP FUNCTIONALITY SETUP
function letsDoThis(){
    inquirer.prompt ([
    {    
        type:"rawlist",
        name:"action",
        choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
        ]
    }
    ]).then(function(answer) {
        if (answer.action === "View Products for Sale") {
            showInventory();
            connection.end();
        } else if (answer.action === "View Low Inventory") {
            lowInventory();
            connection.end();
        } else if (answer.action === "Add to Inventory") {
            updateInventory();
        } else if (answer.action === "Add New Product") {
            newProduct();
        };
    });
};

//SHOW INVENTORY FUNCTION
function showInventory() {
    connection.query("SELECT * FROM products", function(err, response){
        if(err) throw(err);
        var newResponse= [];
        for (var i=0; i < response.length; i++) {
            let newObj = {
                id: response[i].item_id,
                name: response[i].product_name,
                department: response[i].department_name,
                price: response[i].price,
                stock: response[i].stock_quantity
            }
            newResponse.push(newObj);
        };
        console.table(newResponse);
    });
};

//VIEW LOW STOCK
function lowInventory() {
    connection.query("SELECT * FROM products WHERE stock_quantity BETWEEN -100 AND 5", function(err, response){
        if(err) throw(err);
        var newResponse= [];
        for (var i=0; i < response.length; i++) {
            let newObj = {
                id: response[i].item_id,
                name: response[i].product_name,
                department: response[i].department_name,
                price: response[i].price,
                stock: response[i].stock_quantity
            }
            newResponse.push(newObj);
        };
        console.table(newResponse);
    });
};

//UPDATE INVENTORY STOCK
function updateInventory() {
    showInventory();
        inquirer.prompt ([
            {
                type:"input",
                message:"What product would you like to update? (ID #): ",
                name: "id_number",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                        return true;
                        }
                        return false;
                    }
            },
            {
                type:"input",
                message:"What is the new stock quantity? ",
                name: "new_stock",
                    validate: function(value) {
                        if (isNaN(value) === false) {
                        return true;
                        }
                        return false;
                    }
            }
        ]).then(function(answer) {
            connection.query("UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: answer.new_stock
                },
                {
                    item_id: answer.id_number
                },
            ],
            function(err, res) {
                console.log("Update received...");
            })
            connection.query("SELECT product_name FROM products WHERE ?", { item_id: answer.id_number }, function(err, res) {
                console.log(res[0].product_name + " product updated!\n");
            });
        connection.end();
        })
};

//ADD NEW PRODUCT
function newProduct() {
    inquirer.prompt ([
        {
        type:"input",
        message:"Product Name: ",
        name: "product_name",
        },
        {
        type:"input",
        message:"Department Name: ",
        name: "department_name",
        },
        {
        type:"input",
        message:"Price: ",
        name: "price",
        },
        {
        type:"input",
        message:"Stock Quantity: ",
        name: "stock",
        }
    ]).then(function(answer){
        connection.query("INSERT INTO products SET ?",
        [
            {
                product_name: answer.product_name,
                department_name: answer.department_name,
                price: answer.price,
                stock_quantity: answer.stock
            }
        ],
        function(err, res) {
        console.log(res.affectedRows + " new product added!\n");
        })
    connection.end();
    })
}