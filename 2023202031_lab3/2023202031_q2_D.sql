SELECT b.author_name, a.book_count 
FROM (SELECT COUNT(book_id) AS book_count, author_id FROM books GROUP BY author_id HAVING book_count >= 2) AS a,
 authors AS b 
 WHERE a.author_id = b.author_id 
 ORDER BY a.book_count, b.author_name DESC LIMIT 3;