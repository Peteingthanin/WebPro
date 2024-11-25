DROP DATABASE IF EXISTS Stylish;
CREATE DATABASE IF NOT EXISTS Stylish;
USE Stylish;

DROP TABLE IF EXISTS Product;
CREATE TABLE IF NOT EXISTS Product(
pd_id INT NOT NULL PRIMARY KEY, 
pd_name VARCHAR(50) NOT NULL,
pd_price INT NOT NULL,
pd_description  VARCHAR(300),
pd_color VARCHAR(10)
);

DROP TABLE IF EXISTS Admin_info;
CREATE TABLE IF NOT EXISTS Admin_info(
admin_id INT NOT NULL PRIMARY KEY, 
admin_fname VARCHAR(50) NOT NULL,
admin_lname VARCHAR(50) NOT NULL,
admin_age INT NOT NULL,
admin_address  VARCHAR(100) NOT NULL,
admin_email VARCHAR(50) NOT NULL,
admin_phonenum INT(10) NOT NULL
);

DROP TABLE IF EXISTS Admin_login_info;
CREATE TABLE IF NOT EXISTS Admin_login_info( 
admin_username VARCHAR(50) NOT NULL PRIMARY KEY,
admin_password VARCHAR(50) NOT NULL,
admin_login_log datetime NOT NULL,
admin_id INT NOT NULL
);

DROP TABLE IF EXISTS Customer_info;
CREATE TABLE IF NOT EXISTS Customer_info(
ctm_id INT NOT NULL PRIMARY KEY, 
ctm_fname VARCHAR(50) NOT NULL,
ctm_lname VARCHAR(50) NOT NULL,
ctm_age INT NOT NULL,
ctm_address  VARCHAR(100) NOT NULL,
ctm_email VARCHAR(50) NOT NULL,
ctm_phonenum INT(10) NOT NULL
);

DROP TABLE IF EXISTS Customer_login_info;
CREATE TABLE IF NOT EXISTS Customer_login_info( 
ctm_username VARCHAR(50) NOT NULL PRIMARY KEY,
ctm_password VARCHAR(50) NOT NULL,
ctm_login_log TIMESTAMP NOT NULL,
ctm_id INT NOT NULL
);

INSERT INTO Product(pd_id,pd_name,pd_price,pd_description,pd_color)
VALUES
(001,"Jeans",599,"Jeans: trousers made of denim that are worn informally. Denim is a strong cotton cloth. Traditionally jeans are a red color.","Red"),
(002,"Pajamas",799,"Pajamas: Soft loose clothing that is worn in bed. They consist of trousers (pants) and a type of shirt.","Black"),
(003,"Sweater",999,"Sweater or jumper: a sweater is usually made of wool and you wear it over a shirt to keep you warm in winter. They have long sleeves.","White"),
(004,"Blouse",299,"Blouse: a piece of clothing for women and girls that is worn on the upper part of the body. It is more elegant or formal than a shirt and sometimes made of lighter or finer material. It typically has a collar, buttons, and (short or long) sleeves.","Orange"),
(005,"Dress",399,"Dress: a piece of clothing (typically for women or girls) that covers the top half of the body and hangs down over the legs. It is similar to a skirt and top joined together as one piece.","Purple"),
(006,"Hoodie",1099,"Hoodie: a sweatshirt with a hood for covering the head. Sometimes it is written as hoody.","Blue"),
(007,"Shorts",99,"Shorts: a type of trousers that are short with the leg sections only reaching above the knees.","Brown"),
(008,"Bikini",199,"Bikini: a bikini is typically worn by women when swimming or sunbathing. It consists of two separate parts, the top part and the bottom part.","Pink"),
(009,"Skirt",499,"Skirt: a woman’s outer garment that hangs from the waist and does not have individual sections for the legs. It normally hangs to around the knees though can be longer or shorter. A short skirt is called a mini-skirt.","Green"),
(010,"Suit",2099,"Suit: a suit is generally used on formal occasions or when doing business. A suit contains a formal pair of trousers (pants) and a jacket of the same material. People usually wear a long-sleeved shirt and a tie with a suit.","Yellow");

INSERT INTO Admin_info(admin_id,admin_fname,admin_lname,admin_age,admin_address,admin_email,admin_phonenum)
VALUES
(001, "Stephen", "Smith", 30, "18-20 Soi 26 Charoenrat Road Klongtonsai Khlongsan Bangkok 10600", "stephen.smi@mahidol.ac.th", 0659519065),
(002, "Anderson", "Sparky", 29, "Bang Soaw Tong, Bang SoawTong, Samutprakarn Samutprakarn 10540", "anderson.spa@mahidol.ac.th", 0912376482),
(003, "Bach", "Richard", 35, "244/4-5 Klongchakphra Klong Chuck Phra Taling Li Bangkok 10170", "bach.ric@mahidol.ac.th", 0872644189),
(004, "Cheever", "John", 37, "1060 Songwad Road Chakrawad Jomthong Bangkok 10100", "cheever.joh@mahidol.ac.th", 0998855162),
(005, "Dreiser", "Theodore", 28, "55/1 Rathakarn Road Hat Yai Songkhla 90110", "dreiser.the@mahidol.ac.th", 0600182732),
(006, "Ferron", "Marcelle", 34, "96/5 Soi Songphra Siphraya Road Jomthong Bangkok 10500", "ferron.mar@mahidol.ac.th", 0924325603),
(007, "Goya", "Francisco", 31, "140-142 Damrongrak Raod Klong Mahanak Jomthong Bangkok 10100", "goya.fra@mahidol.ac.th", 0814444056),
(008, "Hoffer", "Eric", 28, "100/407 Moo 5 Bangkruai-Sainoi Road Bangrakpattana Bang Bua Thong Nonthaburi 11110", "hoffer.eri@mahidol.ac.th", 0813838641),
(009, "Johnson", "Zach", 37, "6-8 Oriental Ln New Rd Bang Rak Bang Rak Jomthong Bangkok 10500", "johnson.zac@mahidol.ac.th", 0875012168),
(010, "Kesey", "Ken", 27, "257 Soi Klang Sukhumvit Klongton Nua Watthana Jomthong Bangkok 10110", "kesey.ken@mahidol.ac.th", 0955009005);

INSERT INTO Admin_login_info(admin_username,admin_password,admin_login_log, admin_id)
VALUES
("u6588001", "Znj5JdRfeXAkdTL", "2024-04-11 13:24:00", 001),
("u6588002", "gZphSLI7AVLJqqp", "2024-04-12 13:23:44", 002),
("u6588003", "1E16VuviWeakomY", "2024-04-13 13:23:59", 003),
("u6588004", "XVJWN1QORrCu8gx", "2024-04-14 13:25:21", 004),
("u6588005", "FshmTiAfZr7ih0F", "2024-04-15 13:23:53", 005),
("u6588006", "IlCZ7XCRPziJcRE", "2024-04-16 13:22:23", 006),
("u6588007", "sFDkPgGhrRLKBu0", "2024-04-17 13:21:55", 007),
("u6588008", "eFrrqorG1H4AAap", "2024-04-18 13:20:41", 008),
("u6588009", "CDnnb8ihlUazHKX", "2024-04-19 13:23:40", 009),
("u6588010", "CRPH1YfI04wwcrl", "2024-04-20 13:40:52", 010);

INSERT INTO Customer_info(ctm_id,ctm_fname,ctm_lname,ctm_age,ctm_address,ctm_email,ctm_phonenum)
VALUES
(031, "Lloyd", "Seth", 18, "1010 Shinawatra Tower 3 6Th Floor Vibhavadee-Rangsit Road Ladyao Khlongsan Bangkok 10900", "lloyd.set@gmail.com", 0917925323),
(032, "Magee", "Bryan", 20, "9 Bamrungmuang San Chaoporsua Phra Nakhon Muang Bangkok 10200", "magee.bry@gmail.com", 0958801333),
(033, "Nagel", "Thomas", 30, "39/140 Soi Chokechai 4 Ladprao 53 Lad Prao Lat Li Bangkok 10230", "nagel.tho@gmail.com", 0970100217),
(034, "Orwell", "George", 19, "60 Suan Luang Suanluang Jomthong Bangkok 10100", "orwell.geo@gmail.com", 0932461615),
(035, "Pater", "Walter", 21, "23/20-1 Soi Chalongkrung Rama Iv Maha Ploed Tharam Bang Rak Songkhla 10500", "pater.wal@gmail.com", 0644521560),
(036, "Radner", "Gilda", 34, "462/19-21 Gp 10 Soi Mohphuenguthit Rajburana Bang Pakork Ratburana Jomthong Bangkok 10140", "radner.gil@gmail.com", 0972567329),
(037, "Saroyan", "William", 22, "39 Soi Sukhumvit 16 Sukhumvit Road Jomthong Bangkok 10110", "saroyan.wil@gmail.com", 0811121819),
(038, "Tora", "Apisai", 26, "88/195 Gp 8 Ramkhamhaeng Sapan Sung Saphansung Bang Bua Thong Nonthaburi 11110", "tora.api@gmail.com", 0975462456),
(039, "Ueshiba", "Morihei", 29, "292 New Road Samphanthawong Bangkok 10100", "ueshiba.mor@gmail.com", 0846742408),
(040, "Ventura", "Jesse", 31, "28/6 Vibhavadi-Rangsit Rd Chatuchak Bangkok 10900", "ventura.jes@gmail.com", 0956784321);

INSERT INTO Customer_login_info(ctm_username,ctm_password,ctm_login_log, ctm_id)
VALUES
("lloydsethhomely", "lq6JonUN6DbaUsF", "2024-03-29 23:24:00", 031),
("mageebryansilly", "HeC45VEph0SvaPS", "2024-04-01 01:21:31", 032),
("nagelthomaslabor", "7B3N16WqGcdyifS", "2024-04-13 07:12:59", 033),
("boingorwellgeorge", "NjmDlvi17lxV0dO", "2024-04-21 21:25:21", 034),
("paterwaltertailor", "xB4EQNonSgJ9xOV", "2024-04-22 10:23:53", 035),
("radnergildawooded", "mF3WKpuU6NrKrpn", "2024-04-22 22:22:23", 036),
("peaksaroyanwilliam", "FicSObaAyYg3RNw", "2024-04-17 05:21:55", 037),
("toraapisaispherical", "RiZLPZ6bFyKUuPF", "2024-04-16 11:20:41", 038),
("ueshibamoriheithing", "wpiEDCcFrdEJrvF", "2024-03-01 09:23:40", 039),
("outpostventurajesse", "SFgYzHBifX5wkr0", "2024-04-15 08:40:52", 040);

SELECT *
        FROM Product WHERE pd_name LIKE '%1%' OR pd_id LIKE '%1%'  OR pd_color LIKE '%1%'
