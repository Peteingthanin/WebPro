Readme.txt					
1. Run SQL script to create a database named stylish
2. Set up MySQL Server by creating a new user or you can edit our .env file based on your MySQL Workbench.
This is the MySQL user setting
	Username = VSCode
	Password = 1234
	Database = stylish
	Machine = localhost

This is our .env file
	MYSQL_HOST=localhost
	MYSQL_USERNAME=VSCode
	MYSQL_PASSWORD=1234
	MYSQL_DATABASE=stylish
	PORT=3030

3. Give Schema Privileges such as INSERT, DELETE, UPDATE, and SELECT to the table for that username.
4. Open VS Code then open the file folder
5. Open the terminal and make sure its path is correct
6. Start the server by npm start.
	If it’s not working, try to npm init or npm install all the necessary modules again.
	Make sure the computer has node.js installed.
	If it’s not working, try to check .env file or MySQL workbench again.
7. Open the browser and connect to http://localhost:3030/ and now you should be able to connect to the Stylish website
