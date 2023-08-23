SELECT b.title AS book_name, c.author_name, a.recent_date_issued 
FROM (SELECT MAX(date_issued) AS recent_date_issued, book_id FROM issued_users GROUP BY book_id) AS a,
 books AS b, authors AS c 
 WHERE a.book_id = b.book_id AND b.author_id = c.author_id;