var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "password",
	database: "bamazonDB"
});

// var item = action.item_id;
// var quantity = input.quantity;

// database connection
connection.connect(function (error) {
	if (error) throw error;
	console.log("Connected as ID " + connection.threadId);
	// view product prompt
	viewProducts();
	runSearch();
});

// view products function
var viewProducts = function() {
	var query = "SELECT * FROM products";
	connection.query(query, function (error, results) {
		if (error) throw error;

		for (var i = 0; i < results.length; i++) {
			console.log(results[i].id + " | " + results[i].product_name + " | " + results[i].department_name + 
			" | " + results[i].price + " | " + results[i].stock_quantity)
		// for loop
		};
	// connection.query
	})
}

function runSearch() {
	inquirer
		.prompt({
			name: "item_id",
			type: "list",
			message: "Which item ID would you like?",
			choices: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10"]
		})
		.then(function(action) {
			var item = action.item_id;
			// var quantity = input.quantity;

			checkQuantity();	
		})
}

function checkQuantity() {
	inquirer
		.prompt({
			name: "quantity",
			type: "list",
			message: "How many would you like?",
			choices: [
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"10"]
		})
		.then(function(input) {
			var quantity = input.quantity;
			// var item = action.item_id;

			var query = "SELECT * FROM products WHERE ?";
			connection.query(query, { stock_quantity: quantity }, function (error, data) {
				if (error) throw error;
			
				console.log("Your order has been placed!");

				connection.end();
			})
		})
}






