var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 8889,
	user: "root",
	password: "password",
	database: "bamazonDB"
});

connection.connect(function (error) {
	if (error) throw error;
	console.log("connected as id " + connection.threadId);

	// run functions here
	viewAll();

});

function viewAll() {
	connection.query("SELECT * FROM products", function (error, results) {

		if (error) throw error;
		console.log("----------------------");

		for (var i = 0; i < results.length; i++) {
			console.log(results[i].id + " | " + results[i].product_name + " | " + results[i].department_name + 
			" | " + results[i].price + " | " + results[i].stock_quantity)
		};

		console.log("----------------------");
	});
}