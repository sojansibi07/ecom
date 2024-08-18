const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const { MongoClient } = require('mongodb');

app.use(cors())
app.use(express.json());


// async function mongoConnect() {
//     let client = new MongoClient('mongodb+srv://kalathilgeorgeantony:iVDEpASSWORDaDIKNAM@bigdata.68y9vlb.mongodb.net/?retryWrites=true&w=majority&appName=BigData');
//     await client.connect();
//     db = client.db('homepagetest');
//     console.log("MongoDB Connection Succesful!")
//  }
 
 

app.get('/products', async function (req, res) {
    let userdb = await axios.get('https://fakestoreapi.com/products');
    let prod_db = await db.collection('products').find({}).toArray();
    res.json(prod_db);
 });

 app.post('/addproduct', async function(req, res) {
    let output = await db.collection('products').insertOne(req.body);
    console.log(req.body);
})

// app.post('/register', async function(req, res) {
//     let output = await db.collection('user').insertOne(req.body);
//     console.log(req.body);
// })

app.post('/login', async function(req, res) {
    let username = req.body.userName;
    let password = req.body.password;
    let result;
    //let output = await db.collection('user').insertOne(req.body);
    console.log(req.body);
})

app.listen(2000, function() {
    console.log('server listening on port 2000');
    // mongoConnect();
    })