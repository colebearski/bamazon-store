DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
	id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(45) NULL,
	department_name VARCHAR(45) NULL,
	price INTEGER NULL,
	stock_quantity INTEGER NULL,
	PRIMARY KEY (id)
);

/* product 1 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SmartWater", "Glaceau", 5, 25);

/* product 2 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RedBull", "Wings", 8, 25);

/* product 3 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Black Label", "Mountain Dew", 3, 10);

/* product 4 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Label", "Mountain Dew", 3, 9);

/* product 5 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Icy Charge", "Gatorade", 4, 10);

/* product 6 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Razz", "Gatorade", 4, 15);

/* product 7 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("White Lightning", "Gatorade", 4, 6);

/* product 8 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NormalWater", "Glaceau", 2, 42);

/* product 9 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("GreenBull", "Wings", 8, 20);

/* product 10 */
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Bomber", "Gatorade", 4, 16);

