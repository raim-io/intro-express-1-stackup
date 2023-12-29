# Inttroduction to Back End With ExpressJS

Before we start writing some code, we will first need to understand the concept behind a server. In the JavaScript skill API module, you learnt how to make a request to a weather API. This is known as a RESTful API or Representational State Transfer Application Programming Interface.

In a relationship between the client and the server, the PC, Smartphone and Laptop are the clients and they can communicate with a centralised computer called the server. In development, those applications running on the clients can be our Front End frameworks like ReactJS, React Native, NextJS and others. The application on the Back End (Server) that handles and responds to these requests is ExpressJS.

Server and Client can communicate between 2 types of Frameworks, `Transmission Control Protocol` (TCP) and `User Datagram Protocol` (UDP). TCP is the standard for most Server-Client communication. It is useful for making chat applications, membership portals and more. UDPs are usually the frameworks to make online gaming servers like Counter-Strike, Valorant, and more. This is because UDP will expect the client computer to make multiple requests per second. In this campaign, we will be using the TCP framework.

Generally, a Server-Client can have 3 main types of communication, using a `Hypertext Transfer Protocol` (HTTP/HTTPS), `Server Polling` and `Web Sockets`. For HTTP/HTTPS, they are built using a `RESTful API` service. It is the Gold Standard for most Server Client communication. They use HTTP methods like “GET”, “PUT”, “POST” and “DELETE” to perform Create, Read, Update, and Delete (CRUD) operations within the server application. For this protocol, the client will make one request and the server can only respond one time.

Server Polling can use the same `RESTful API` service but in this case, the client, our Front End, will make multiple requests to the server at a fixed interval to mimic a “Real-Time” experience. This use case can be found in a real-time analytics dashboard, Restaurant Point of Sales System and more.

Lastly, the Server and Client can also communicate using Web Sockets. Unlike RESTful frameworks, Web Socket Communication is when the server can send back multiple data packets to the Front End without any limit. The Front End can do the same as well. Think of it like a tunnel where the Server and Client are in constant communication with each other. This is very useful for Real-Time communication like video conferencing, text messaging, and more.

Without further ado, let’s start the installation process to set up our environment for our Back End Application. Since this is a JavaScript-based project, we will need to install Node Package Manager (NPM). Once we have done so, we will install ExpressJS which is a package that gives us a head start to creating our own Back End Application from scratch

Since we will be creating a Back End Application with ExpressJS in this quest, you should read this article to learn more about ExpressJS.

## Project Setup

`Pre-reqisite`

    - Must have Node Package Manager (npm) installed.
    - Must have git installed.

- Clone this repostory
```bash
git clone https://github.com/raim-io/intro-express-1-stackup.git
```
- Navigate into the project directory
```bash
cd intro-express-1-stackup
```
- Install project dependencies
```bash
npm install
```
P.S: This command installs allthe project dependencies. These dependencies include:
    - Express: It is the basic framework and module we will need to use while creating a Back End Application.
    - Morgan: It is used to set up logging for HTTP requests. It is extremely useful to see which request has been made, the status code of the request and the time the server takes to respond.
    - Body Parser: Enable the parsing of incoming JSON data. This JSON data will be used as part of the data processing later as we write the algorithms.
    - Nodemon: This package is useful in helping you to reload the server application whenever a change is detected.

- Run server script
```bash
nodemon app.js
```

On your browser, navigate to `http://localhost:3000`, you will see a response displayed on your screen page

`response`:
```json
{
    "message": "Hello World from ExpressJS!"
}
```

Congrats, you have successfully built a back end server using the expressJS framework.

Within the project folder, the app.js file contains a well documented javascript code (entry-point) used in implementing the backend server logic, do well to check the file content for better understanding.
