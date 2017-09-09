var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "password",
	database: "bamazonDB"
});

// database connection
connection.connect(function (error) {
	if (error) throw error;
	// view product prompt
	viewProducts();
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

	// inquirer
	inquirer
		.prompt({
			name: "action",
			type: "list",
			message: "Which item ID would you like?",
			choices: 
				[
				"1", 
				"2", 
				"3", 
				"4", 
				"5", 
				"6", 
				"7", 
				"8", 
				"9", 
				"10"
				]
		})
		.then(function(answer) {
			switch (answer.action) {
				case "1", "2", "3", "4", "5", "6", "7", "8", "9", "10":
				purchaseProduct();
				break;
			}
		});
// view products
}

function purchaseProduct () {
	inquirer
		.prompt({
			name: "quantity",
			type: "list",
			message: "How many would you like?",
			choices: 
				[
				"1",
				"2",
				"2", 
				"3", 
				"4", 
				"5", 
				"6", 
				"7", 
				"8", 
				"9", 
				"10"
				]
		})
		.then(function(answer) {
			switch (answer.quantity) {
				case "1", "2", "3", "4", "5", "6", "7", "8", "9", "10":
				checkInventory();
				break;
			}
		})
// purchase product
}



/*
function purchaseProduct () {
	inquirer
		.prompt({
			name: "quantity",
			type: "list",
			message: "How many would you like?",
			choices: [
				"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
		})
		.then(function(quantity) {
			var query = "SELECT id, product_name, department_name, price, stock_quantity FROM products WHERE ?";
			connection.query(query, { quantity: quantity.quantity }. function (error, results) {

				for (var i = 0; i < results.length; i++) {
					console.log(results[i].id + " | " + results[i].product_name + " | " + results[i].department_name + 
			" | " + results[i].price + " | " + results[i].stock_quantity)
				// for loop
				};
			// connection.query
			});
		// .then
		});
// purchase product
}
*/








/*
connection.connect(function (error) {
	if (error) throw error;
	console.log("Connected as ID " + connection.threadId);

	viewProducts();
	// purchaseProduct();

});
*/



/*
var viewProducts = function () {
	connection.query("SELECT * FROM products", function (error, results) {
		if (error) throw error;

		for (var i = 0; i < results.length; i++) {
			console.log(results[i].id + " | " + results[i].product_name + " | " + results[i].department_name + 
			" | " + results[i].price + " | " + results[i].stock_quantity)
		};
	})
}

inquirer.prompt([{
	type: "input",
	name: "item_id",
	message: "Please provide the item ID you would like.",
	choices: [{
		name: 1
	}, {
		name: 2
	}, {
		name: 3
	}]
}]).then(function(input) {
	var item = input.item_id;
	var quantity = input.quantity;
})
*/


/*
var purchaseProduct = function () {
	inquirer.prompt([{
		type: "input",
		name: "item_id",
		message: "Please provide the item ID you would like."
	}, {
		type: "input",
		name: "quantity",
		message: "How many would you like?"
	}

	}]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;
	});
*/



/*
var purchaseProduct = function () {
	inquirer.prompt([
	{
		type: "input",
		name: "item_id",
		message: "Please provide the item ID you would like to purchase."
	}, {
		type: "input",
		name: "quantity",
		message: "How many would you like?"
	}

	}]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;

		// checkInventory(input.item, input.quantity);
		connection.query("SELECT * FROM products WHERE ?", {item_id: item}, function (error, data) {
			if (error) throw error;

			if (data.length === 0) {
				console.log("Incorrect! Please select a valid option bro.");
			}else{
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log("We have that bro!");

					connection.query("UPDATE products SET stock_quantity = " + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item, 
						function (error, data) {
							if (error) throw error;

							console.log("Your order has been placed bro!");

							connection.end();
						});
				};

			}
		})					
	});

// purchaseProduct();
*/




