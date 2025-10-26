CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    population INT
);

INSERT INTO cities (id, name, population) VALUES
(1, 'Stockholm', 990261),
(2, 'Gothenburg', 674529),
(3, 'Malmoe', 365644),
(4, 'Oslo', 724300);


CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO products (id, name, price) VALUES
(1, 'Laptop', 999.99),
(2, 'Coffee Maker', 49.99),
(3, 'Desk Chair', 150.00),
(4, 'Smartphone', 799.99),
(5, 'Headphones', 199.99);


CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    city_id INT NOT NULL REFERENCES cities(id),
    product_id INT NOT NULL REFERENCES products(id),
    price NUMERIC(10,2) NOT NULL
);

INSERT INTO sales (city_id, product_id, price) VALUES
(1, 1, 999.99),
(2, 2, 49.99),
(3, 3, 150.00),
(4, 4, 799.99),
(1, 5, 199.99);


CREATE OR REPLACE VIEW sales_view AS
SELECT
    cities.name AS place,
    products.name AS name,
    sales.price AS price
FROM sales
JOIN cities ON sales.city_id = cities.id
JOIN products ON sales.product_id = products.id;
