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
        showInventory();
    });
// INQUIRER SET UP
    var inquirer = require("inquirer");



//SHOW INVENTORY FUNCTION
    function showInventory() {
        connection.query("SELECT * FROM products", function(err, response){
            if(err) throw(err);
            var newResponse= [];
            for (var i=0; i < response.length; i++) {
                let newObj = {
                    id: response[i].item_id,
                    name: response[i].product_name,
                    price: response[i].price
                }
                newResponse.push(newObj);
            };
            console.table(newResponse);
            buy();
        });
    };

// WHATCHA WANNA BUY
    function buy(){
        inquirer.prompt ([
            {
                type:"input",
                name:"wantID",
                message:"What product would you like to buy? (ID number): "
            },
            {
                type:"input",
                name:"wantQuantity",
                message:"How many do you want?",
                validate: function(value) {
                    if (isNaN(value) === false) {
                    return true;
                    }
                    return false;
                }      
            }
        ]).then(function(purchaseInfo){
            connection.query("SELECT stock_quantity FROM products WHERE ?", { item_id: purchaseInfo.wantID }, function(err, res) {
                //console.log("Your card has been charged: $" + res[0].price * parseInt(purchaseInfo.wantQuantity));
                
                if (purchaseInfo.wantQuantity <= res[0].stock_quantity) {
                    yaCanPurchaseDat(purchaseInfo);
                    connection.end();
                } else {
                    console.log("Out of stock");
                    connection.end();
                };
            });
        })
    };

    function yaCanPurchaseDat(purchaseInfo) {
        // console.log("Want ID: " + purchaseInfo.wantID);
        // console.log("Want Quantity: " + purchaseInfo.wantQuantity);
            var query = connection.query("UPDATE products SET ? WHERE ?", 
            [
                {
                    stock_quantity: stock_quantity =- purchaseInfo.wantQuantity
                },
                {
                    item_id: purchaseInfo.wantID
                }
            ],
            function(err, res){
                // console.log(res.affectedRows);
                console.log("Thank you for your purchase.")
            });

            connection.query("SELECT price FROM products WHERE ?", { item_id: purchaseInfo.wantID }, function(err, res) {
                console.log("Your card has been charged: $" + res[0].price * parseInt(purchaseInfo.wantQuantity))
            });
    }
