SELECT a.user_name, b.genre FROM issued_users AS a, books AS b WHERE (b.book_id, a.user_id) NOT IN (SELECT book_id, user_id FROM issued_users);
