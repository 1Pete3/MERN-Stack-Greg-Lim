<h1 align="center"> MERN Stack Applpication using "Beginning MERN Stack Development" by Greg Lim</h1>
<p align="center">
  <img src="https://m.media-amazon.com/images/P/B0979MGJ5J.01._SCLZZZZZZZ_SX500_.jpg">
</p>

<p align="center">
I am currently reading and completing the project in <a href ="https://www.amazon.com/Beginning-MERN-Stack-MongoDB-Express/dp/B0979MGJ5J">Beginning MERN Stack: Build and Deploy a Full Stack MongoDB, Express, React, Node.js App </a>
by Greg Lim
</p>
<p align="center">
ISBN - 979-8523625503<br />
Publication Date - June 21, 2021
</p>



<h2>Prerequisites</h2>

<ul>
  <li>A MongoDB account is required for creating a database and using the connection uri within the project.</li>
  <li>The book</li>
  <li>Knowledge of MERN technologies as well as HTML, CSS, and JavaScript
</ul>
<br />
<strong>MERN</strong> stands for:<br />

<strong>M</strong> - MongoDB<br />
<strong>E</strong> - Express<br />
<strong>R</strong> - React<br />
<strong>N</strong> - Node<br />
<br />

<h2>Getting Started</h2>
This book uses ES modules syntax whereas in my code, I will be using CommonJS modules. More information on the differences can be found here <a href ="https://blog.logrocket.com/commonjs-vs-es-modules-node-js/">CommonJs vs. ES Modules</a>
<br/><br/>
My project is currently structured like this
<br/>
<p align="center">
<img src="https://user-images.githubusercontent.com/75858369/200129260-3c4dba50-a447-4a1e-be3c-013a07014c87.png">
  </p>

 
<h2>Packages</h2>
There are several packages used in this project they are listed below 
<ul>
  <li><a href="https://www.npmjs.com/package/cors">Cors</a></li>
  <li><a href="https://www.npmjs.com/package/dotenv">Dotenv</a></li>
  <li><a href="https://www.npmjs.com/package/express">Express</a></li>
  <li><a href="https://www.npmjs.com/package/mongodb">MongoDB</a></li>
  <li><a href="https://www.npmjs.com/package/nodemon">Nodemon</a></li>
</ul>



If you use VS Code remember to use the following command in the terminal to create a package.json file

    npm init -y
    
To install the packages above the following command can be used 

    npm i cors dotenv express mongodb
    
 I installed nodemon as a dev dependencies by using the following command
 
    npm i nodemon -D
  
 Inside package.json I have the following code 
    
     {
      "name": "movie-reviews",
      "version": "1.0.0",
      "description": "",
      "main": "server.js",
      "scripts": {
        "start": "npm Backend/server",
        "dev": "nodemon Backend/server"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^16.0.3",
        "express": "^4.18.2",
        "mongodb": "^4.11.0"
      },
      "devDependencies": {
        "nodemon": "^2.0.20"
      }
    }


<h2>Enviroment Variables (.env)</h2>
