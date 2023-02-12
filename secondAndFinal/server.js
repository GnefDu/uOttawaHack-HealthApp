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
const bodyParser = require('body-parser')
app.use(express.json());

//Getting all the static files and json 
app.use(express.static("public"));

//first thing to do as the server starts:
//initiate db, and populate them
console.log("Initializing DB");
let dbInitialization = execFileSync('python', ['./db/initializer.py']).toString();
console.log(dbInitialization);

//GET REQUESTS
//PATIENT
//patient home page
app.get("/patient", (_,res) => {
    console.log("GET /patient");
    res.sendFile(path.join(__dirname, '/public/patient.html'));
});

app.get("/patient/signup", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/signupsheet.html'));
});

//POST REQUESTS
//PATIENT
app.post("/patient/signup", signup);

function signup(req, res) {
    console.log("POST /patient/signup");
    console.log(req.body);
}

app.listen(3000);
console.log("Server listening at http://localhost:3000\n");
