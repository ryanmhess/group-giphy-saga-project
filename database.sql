CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

--DROP TABLE "favs";
--DROP TABLE "category";

-- Category table
CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change them :)
INSERT INTO "category" 
	("name")
	VALUES 
	('funny'), ('evil'), ('cartoon'), ('lovely'), ('scary');

-- Category table
CREATE TABLE "favs" (
    "id" SERIAL PRIMARY KEY,
    "url" VARCHAR (100) NOT NULL,
    "category" VARCHAR (100) DEFAULT NULL
);

-- Default categories. You may change them :)
INSERT INTO "favs" 
	("url")
	VALUES 
	('https://media2.giphy.com/media/KUP5hlhpZZvFDj6C7p/200w.webp'),
	('https://media4.giphy.com/media/yYnhh4mNbjxVOI9jzL/200w.webp'),
	('https://media1.giphy.com/media/wvbZIfs10gYvYeu2BU/200w.webp'),
	('https://media3.giphy.com/media/MBZooTpa7pFuoKIrtm/giphy.webp'),
	('https://media3.giphy.com/media/joj9epQQPM7p26xySz/giphy.webp');