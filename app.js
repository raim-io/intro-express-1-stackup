/*
Now, we are ready to create our server script. We need to
create an entry file which all requests will go through. Each
request is also known as a route.

The entry file will need to fulfil a few objectives:

Defining and using the Middlewares
Initialising the server
Handle the routings
*/


// We start by importing the required/necessary modules
const express = require('express'); // We use the express
// module to create an Express app
const morgan = require('morgan'); // We use morgan to set up
// logging for HTTP requests. It is extremely useful to see
// which request has been made, the status code of the request
// and the time the server takes to respond.
const bodyParser = require('body-parser'); // use the
// body - parser to enable the parsing of incoming JSON data
// This JSON data will be used as part of the data processing
// later as we write the algorithms

// Create an Express app
const app = express(); // creating an instance of the Express
// app using the express() function
const port = 3000; // the port value signifies the network port
// where our server will listen for incoming requests.
// do well to change this to your desired port

// Set up middleware functions for the express app
app.use(morgan('dev')); // enabling  logging middleware, which
// will log incoming requests and their details to the console.
app.use(bodyParser.json()); // JSON parsing middleware: enabling
// the parsing of incoming JSON data in the request body.

// Define routes
// Defining routes is an essential part of any web application.
// Here, lines 15 to 18 establish a simple route for the root
// URL('/').Whenever a client sends a GET request to the root
// URL, the server responds with a JSON object containing a
// message, confirming that the server is up and running.
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Hello World from ExpressJS!'
    })
});

// Start the server
// we initiate the server to start listening on the designated
// port. In line 22, we use app.listen() with the specified
// port and a callback function in line 23 that logs a message
// to the console, notifying that the server is operational.The
// provided URL http://localhost:${port} is the link where the
// server can be accessed locally.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
