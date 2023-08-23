SELECT * FROM 
	(SELECT a.user_name, b.title, c.author_name 
		FROM issued_users AS a, books AS b, authors AS c 
        WHERE a.book_id = b.book_id AND b.author_id = c.author_id) 
	AS res 
    WHERE res.title IS NOT NULL AND res.author_name IS NOT NULL;