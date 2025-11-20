const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const pokeModel = require('./models/pokemon.js');
require('dotenv').config()

const app = express();
app.use(cors());

const mongodb_uri = process.env.MONGO_URI;

async function connect() {
    try {
        await mongoose.connect(mongodb_uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.get('/', (req, res) => res.json({data: "mystery data"}));

app.listen(8000, () => {
    console.log('Server started on port 8000');
})
