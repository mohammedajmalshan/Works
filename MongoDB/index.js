const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;

let db; // Declare db variable to store the database connection

MongoClient.connect("mongodb+srv://ajmalshan:ajmalshan123@cluster0.tnmcmag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", (err, client) => {
    if (err) throw err;
    db = client.db('testdb'); // Store the database object in the db variable
});

app.get('/', (req, res) => {
    // Attempting to use `result` here will cause an issue because it's scoped inside the callback
    // and not accessible outside.
    db.collection('employees').find().toArray((err, result) => {
        if (err) throw err;
         console.log(result); // Log the result to console
        res.send(result); // Send the result as response
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
