UPDATE menu
	SET price = 
            CASE food_type
				WHEN "veg" THEN price-1
				WHEN "non-veg" THEN price-5
            END
    ;
    
SELECT * FROM menu;