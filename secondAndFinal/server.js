//using child_process library
const {execFileSync} = require('child_process');
//import file system
const fs = require('fs');
//Import express
const express = require('express');
let app = express();
const path = require('path');
//uuid for unique file names
const { v4: uuidv4 } = require('uuid');

//Getting all the static files and json 
app.use(express.static("public"));

//first thing to do as the server starts:
//initiate db, and populate them
console.log("Initializing DB");
let dbInitialization = execFileSync('python', ['./db/initializer.py']).toString();
console.log(dbInitialization);

//home page (should be handled automatically, but just did it)
app.get("/", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(3000);
console.log("Server listening at http://localhost:3000\n");
