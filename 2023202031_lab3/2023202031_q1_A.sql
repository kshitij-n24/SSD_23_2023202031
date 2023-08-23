UPDATE menu SET dish_name = (SELECT TRIM(REPLACE(dish_name, "0", "")));
SELECT * FROM menu;