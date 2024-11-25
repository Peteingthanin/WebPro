const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mysql = require('mysql2');

const app = express();
dotenv.config();

const port = process.env.PORT;

/* Create a router object and register the router */
const router = express.Router();
app.use(router);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

/* import css,js,photo to the server */
app.use('/css_file', express.static(path.join(__dirname, 'css_file')));
app.use('/photoresource', express.static(path.join(__dirname, 'photoresource')));
app.use('/JavaScipt', express.static(path.join(__dirname, 'JavaScipt')));

// Create Connection to MySQL
const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

/* Connect to DB */
connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected DB: ${process.env.MYSQL_DATABASE}`);
});

// Server listening
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});

/* Add routes */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/HomePage.html'));
    console.log("Request at " + req.url);
});

router.get('/html/SearchPage.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/SearchPage.html'));
    console.log("Request at " + req.url);
});

router.get('/html/HomePage.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/HomePage.html'));
    console.log("Request at " + req.url);
});

router.get('/html/LoginPage.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/LoginPage.html'));
    console.log("Request at " + req.url);
});

router.get('/html/API.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/API.html'));
    console.log("Request at " + req.url);
});

//admin login
router.post("/form-post-login", function(req, res) {
    const fname = req.body.username;
    const lname = req.body.password;
    console.log(`Form submitted by ${fname} at ${Date.now()}`);
    res.redirect('/html/ProductModify.html');
    return; // Terminate the function execution after sending the redirect
});

// admin pages route
router.get('/html/ProductModify', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductModify.html'));
    console.log("Request at " + req.url);
});

router.get('/html/ProductModify.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductModify.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductAdd.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductAdd.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductDelete.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductDelete.html'));
    console.log("Request at " + req.url);
});
router.get('/html/UserAdd.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/UserAdd.html'));
    console.log("Request at " + req.url);
});

router.get('/html/UserModify.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/UserModify.html'));
    console.log("Request at " + req.url);
});

router.get('/html/UserDelete.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/UserDelete.html'));
    console.log("Request at " + req.url);
});
router.get('/html/OurTeam.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/OurTeam.html'));
    console.log("Request at " + req.url);
});

router.get('/html/UserDelete.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/UserDelete.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID1', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID1.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID2', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID2.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID3', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID3.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID4', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID4.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID5', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID5.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID6', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID6.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID7', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID7.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID8', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID8.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID9', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID9.html'));
    console.log("Request at " + req.url);
});
router.get('/html/ProductID10', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/ProductID10.html'));
    console.log("Request at " + req.url);
});

router.post('/html/form-post-add', function (req, res) {
    let productID = req.body.pd_id;
    let product = req.body;
    console.log(req.body)
    if (!product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("INSERT INTO Product SET ? ", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'New Product has beencreated successfully.' })
    });
});
//GET
//HTML & POSTMAN
router.get('/product', function (req, res) {
    connection.query('SELECT * FROM Product', function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'All products' });
    });
});
router.get('/customer', function (req, res) {
    connection.query('SELECT * FROM Customer_info', function (error, results) {
    if (error) throw error;
    return res.send({ error: false, data: results, message: 'All products' });
    });
});
//Delete
//HTML
router.post('/html/form-post-del', function (req, res) {

    let productID = req.body.pd_id;
  
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide Product ID' });
    }
    connection.query('DELETE FROM Product WHERE pd_id = ?', [productID], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
    });
});
//Delete
//Postman
router.delete('/product', function (req, res) {
    let productID = req.body.pd_id;

    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide ProductID' });
    }
    connection.query('DELETE FROM Product WHERE pd_id = ?', [productID], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
    });
});

router.delete('/customer', function (req, res) {

    let productID = req.body.ctm_id;
  
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide ProductID' });
    }
    connection.query('DELETE FROM Customer_info WHERE ctm_id = ?', [productID], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been deleted successfully.' });
    });
});
//Insert
//HTML

router.post('/html/form-post-mod', function (req, res) {
    let productID = req.body.pd_id;
    let product = req.body;
    if (!productID || !product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("UPDATE product SET ? WHERE pd_id = ?", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been updated successfully.' })
    });
});
//Postman
router.post('/product', function (req, res) {
    let productID = req.body.pd_id;
    let product = req.body;
    console.log(req.body)
    if (!product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("INSERT INTO Product SET ? ", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'New Product has beencreated successfully.' })
    });
});
router.post('/customer', function (req, res) {
    let productID = req.body.ctm_id;
    let product = req.body;
    console.log(req.body)
    if (!product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("INSERT INTO Customer_info SET ? ", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'New Product has beencreated successfully.' })
    });
});
//Modify PUT
//Postman
router.put('/product', function (req, res) {
    let productID = req.body.pd_id;
    let product = req.body;
    if (!productID || !product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("UPDATE product SET ? WHERE pd_id = ?", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been updated successfully.' })
    });
});
router.put('/customer', function (req, res) {
    let productID = req.body.ctm_id;
    let product = req.body;
    if (!productID || !product) {
        return res.status(400).send({ error: product, message: 'Please provide Product information' });
    }
    connection.query("UPDATE Customer_info SET ? WHERE ctm_id = ?", [product, productID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Product has been updated successfully.' })
    });
});
//Get product by ID
router.get('/product/idSearch/:id', function (req, res) {
    let productID = req.params.id;
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide Product id.' });
    }
    connection.query('SELECT * FROM Product where pd_id = ?', productID, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product retrieved' });
    });
});
//Get product by Name
router.get('/product/nameSearch/:id', function (req, res) {
    let productID = req.params.id;
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide Product id.' });
    }
    connection.query(`SELECT *
    FROM Product WHERE pd_name LIKE '%${productID}%' OR pd_name LIKE '%${productID}%'`, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product retrieved' });
    });
});
//Get product by Color
router.get('/product/colorSearch/:id', function (req, res) {
    let productID = req.params.id;
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide Product id.' });
    }
    connection.query(`SELECT *
    FROM Product WHERE pd_color LIKE '%${productID}%' OR pd_color LIKE '%${productID}%'`, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product retrieved' });
    });
});
//Get product by All
router.get('/product/allSearch/:id', function (req, res) {
    let productID = req.params.id;
    if (!productID) {
        return res.status(400).send({ error: true, message: 'Please provide Product id.' });
    }
    connection.query(`SELECT *
    FROM Product WHERE pd_id LIKE '%${productID}%' OR pd_name LIKE '%${productID}%' OR pd_color LIKE '%${productID}%'`, function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Product retrieved' });
    });
});
//User Account Management
//HTML
//Add
router.post('/html/form-post-user-add', function (req, res) {

    let customerID = req.body.ctm_id;
    let customer = req.body;
    if (!customer) {
        return res.status(400).send({ error: customer, message: 'Please provide customer information' });
    }
    connection.query("INSERT INTO Customer_info SET ? ", [customer, customerID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'New customer has beencreated successfully.' })
    });
});
//Delete
router.post('/html/form-post-user-del', function (req, res) {

    let customerID = req.body.ctm_id;
  
    if (!customerID) {
        return res.status(400).send({ error: true, message: 'Please provide Customer ID' });
    }
    connection.query('DELETE FROM Customer_info WHERE ctm_id = ?', [customerID], function (error, results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Customer has been deleted successfully.' });
    });
});

//Modify
router.post('/html/form-post-user-mod', function (req, res) {
    let customerID = req.body.ctm_id;
    let customer = req.body;
    if (!customerID || !customer) {
        return res.status(400).send({ error: customer, message: 'Please provide customer information' });
    }
    connection.query("UPDATE customer_info SET ? WHERE ctm_id = ?", [customer, customerID], function (error,
        results) {
        if (error) throw error;
        return res.send({ error: false, data: results.affectedRows, message: 'Customer has been updated successfully.' })
    });
});


