const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri);

const connection = mongoose.connection;

connection.once('open',() => {
    console.log("MongoDB sí jala.");
})



app.listen(3001, () => {
    console.log("Ya está en vivo el servidor en el puerto 3001.");
});