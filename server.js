

// Imports
const express = require ('express');
const mongoose = require ('mongoose');
const parser = require ('body-parser');
const config = require ('./config');

// Routes
const stories_route = require ('./routes/story.route');
const product_route = require ('./routes/product.route');

// Fields (Constants)
const mongo_url = process.env.MONGODB_URI || config.mongo_url;
const server    = express ();
const port      = 3000;

// Connects to the mongo server
mongoose.connect (mongo_url, { useNewUrlParser: true });
mongoose.connection.on ('error', console.error.bind(console, 'MongoDB error:'));

// Applies middleware
server.use (parser.json ());
server.use (parser.urlencoded ({ extended: false }));

// Registers routes n' starts the server
server.use ( '/stories', stories_route );
server.use ( '/products', product_route );
server.listen ( port, _ => { console.log ( `Server listening on port: ${port}.` ) });