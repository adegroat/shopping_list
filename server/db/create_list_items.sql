CREATE TABLE list_items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR (100) NOT NULL,
  description VARCHAR(100),
  quantity INT NOT NULL,
  purchased BOOLEAN DEFAULT FALSE
);