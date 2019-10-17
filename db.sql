CREATE TABLE user(
	user_id INT (11) PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR (100)  NULL,
	lname VARCHAR (100) NULL,
	email VARCHAR (100) NULL,
	phone VARCHAR (100) NULL
)ENGINE=InnoDB;
CREATE TABLE book_category(
	cat_id INT (11) PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR (100)  NULL,
	amount VARCHAR (100) NULL,
	stadium_id INT(11) NULL,
	FOREIGN KEY (stadium_id) REFERENCES stadium(stadium_id) ON DELETE CASCADE ON UPDATE CASCADE

)ENGINE=InnoDB;
CREATE TABLE booked(
	booked_id INT (11) PRIMARY KEY AUTO_INCREMENT,
	user_id INT (11)  NOT NULL,
	pay_reff_id VARCHAR (100) NOT NULL,
	amount_paid INT (11) NULL,
	stadium_id INT(11) NULL,
	cat_id INT(11) NULL,
	date_booked VARCHAR (100) NOT NULL,
	FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (stadium_id) REFERENCES stadium(stadium_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (cat_id) REFERENCES book_category(cat_id) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB;
CREATE TABLE stadium(
	stadium_id INT (11) PRIMARY KEY AUTO_INCREMENT,
	home VARCHAR (100)  NULL,
	away VARCHAR (100)  NULL,
	start_time VARCHAR (100)  NULL,
	vip VARCHAR(100) NULL,
	vip_amount VARCHAR(100) NULL,
	regular VARCHAR(100) NULL,
	regular_amount VARCHAR(100) NULL,
	total_available_seats INT (6)  NULL,
	total_vip_seats INT (6)  NULL,
	total_regular_seats INT (6)  NULL,
	reg_ON VARCHAR(1) NULL
)ENGINE=InnoDB;
CREATE TABLE admin(
	agent_id INT (11) PRIMARY KEY AUTO_INCREMENT,
	fname VARCHAR (100)  NULL,
	lname VARCHAR (100) NULL,
	email VARCHAR (100) NULL,
	phone VARCHAR (100) NULL,
	password VARCHAR (100)  NULL,
	accessType VARCHAR (1) NULL
)ENGINE=InnoDB;