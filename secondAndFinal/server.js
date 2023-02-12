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

//temporarily, we will keep patient and provider info as a variable
const patientHCI = '1111222333AA';
const providerID = '11bf5b37-e0b8-42e0-8dcf-dc8c4aefc000';

//for the demo
app.get("/patient", (_,res) => {
    console.log("/patient > history.html");
    res.sendFile(path.join(__dirname, '/public/history.html'));
});

app.get("/patient/history", (_,res) => {
    console.log("/patient/history > history.html");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    console.log(patientTests);
    res.status(200).send(patientTests);
});

//later
//GET REQUESTS
//PATIENT
//patient home page
// app.get("/patient", (_,res) => {
//     res.sendFile(path.join(__dirname, '/public/patient.html'));
//     console.log("/patient > patient.html");
// });

app.get("/patient/signup", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/signupsheet.html'));
    console.log("/patient/signup > signupsheet.html");
});

app.get("/patient/home", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/patientpostlogin.html'));
    console.log("/patient/home > patientpostlogin.html");
});

app.get("/patient/docu", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/help.html'));
    console.log("/patient/docu > help.html");
});

//for history details is remaining - needs to get HID to display the url
//individualvisit.html ==============> this needs to be solved for ID
app.get("/patient/history/:id", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/individualvisit.html'));
    console.log("/patient/history > history.html");
});

//for provider
app.get("/provider", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/provider.html'));
    console.log("/provider > provider.html");
});

app.get("/provider/signup", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/providersignupsheet.html'));
    console.log("/provider > providersignupsheet.html");
});

app.get("/provider/home", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/providerpostlogin.html'));
    console.log("/provider > providerpostlogin.html");
});

app.get("/provider/history", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/history.html'));
    console.log("/provider > history.html");
});

app.get("/provider/form", (_,res) => {
    res.sendFile(path.join(__dirname, '/public/addtestresults.html'));
    console.log("/provider > addtestresults.html");
});

//provider/diagnosis is remaining - not sure about it yet!

//POST REQUESTS
app.post("/patient/signup", signup);

function signup(req, res) {
    console.log("POST /patient/signup");
    console.log(req.body);
}

app.listen(3000);
console.log("Server listening at http://localhost:3000\n");


