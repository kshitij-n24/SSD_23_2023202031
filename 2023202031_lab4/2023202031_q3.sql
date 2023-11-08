USE CUSTOMER_DB;

DROP PROCEDURE IF EXISTS get_agnt_cd;

DELIMITER &&
CREATE PROCEDURE get_agnt_cd(IN agnt_cd VARCHAR(10))
BEGIN
	DECLARE c_name VARCHAR(40);
    DECLARE c_count VARCHAR(20);
    DECLARE c_grade DECIMAL(10,0);
    DECLARE tab_end INTEGER DEFAULT 0;
    -- DECLARE c_agent_cd VARCHAR(20);
    
    DECLARE cur_details CURSOR FOR SELECT CUST_NAME, CUST_COUNTRY, GRADE FROM customer WHERE AGENT_CODE LIKE CONCAT(agnt_cd, '%');
   
	DECLARE CONTINUE HANDLER FOR NOT FOUND SET tab_end = 1;
    
    OPEN cur_details;
    
    tab_loop: LOOP
		FETCH cur_details INTO c_name, c_count, c_grade;
        IF tab_end = 1 THEN
			LEAVE tab_loop;
		END IF;
        SELECT c_name, c_count, c_grade;
    END LOOP tab_loop;
    CLOSE cur_details;
END&&
DELIMITER ;

CALL get_agnt_cd('A00');

