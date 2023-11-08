-- USE SSDLab;

DROP PROCEDURE IF EXISTS division_num;
DELIMITER &&
CREATE PROCEDURE division_num(IN num1 INTEGER, IN num2 INTEGER)
BEGIN
	DECLARE res_div DECIMAL(10,4);
    SET res_div = num1/num2;
    SELECT res_div;
END&&
DELIMITER ;

CALL division_num(4,2);
