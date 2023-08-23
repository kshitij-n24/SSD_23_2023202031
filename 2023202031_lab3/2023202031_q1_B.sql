ALTER TABLE menu ADD (food_type VARCHAR(20) CHECK(food_type="veg" OR food_type="non-veg"));
UPDATE menu SET food_type="veg" WHERE dish_name LIKE '%Paneer%';
UPDATE menu SET food_type="non-veg" WHERE dish_name LIKE '%Chicken%';
SELECT * FROM menu;