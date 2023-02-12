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

app.use(express.json());
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
const testResultID = '88bf5b88-e0b8-42e0-8dcf-dc8c4aefc000';

//for the demo
//PATIENT
app.get("/patient", (_,res) => {
    console.log("/patient > history.html");
    res.sendFile(path.join(__dirname, '/public/history.html'));
});

app.get("/patient/history", (_,res) => {
    console.log("GET -> /patient/history");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    console.log(patientTests);
    res.status(200).send(patientTests);
});
//hard coding just for demo
app.get("/patient/individVisit/1", (req,res) => {
    console.log("GET -> /patient/individVisit/1");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit0 = {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        doctorDiag: ''
    }
    arrPatientTests = patientTests.split(',');
    visit0.date = arrPatientTests[1].substring(2,12);
    visit0.glucose = arrPatientTests[2].substring(1);
    visit0.bloodpressure = arrPatientTests[3].substring(1);
    visit0.bmi = arrPatientTests[4].substring(1);
    visit0.age = arrPatientTests[5].substring(1);
    visit0.doctorDiag = arrPatientTests[7].substring(1);

    if (arrPatientTests.length > 35) {
        visit0.date = arrPatientTests[31].substring(2,12);
        visit0.glucose = arrPatientTests[32].substring(1);
        visit0.bloodpressure = arrPatientTests[33].substring(1);
        visit0.bmi = arrPatientTests[34].substring(1);
        visit0.age = arrPatientTests[35].substring(1);
        visit0.doctorDiag = arrPatientTests[37].substring(1);
    }

    res.status(200).send(visit0);
});

app.get("/patient/individVisit/2", (req,res) => {
    console.log("GET -> /patient/individVisit/2");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit1 = {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        doctorDiag: ''
    }
    arrPatientTests = patientTests.split(',');
    visit1.date = arrPatientTests[11].substring(2,12);
    visit1.glucose = arrPatientTests[12].substring(1);
    visit1.bloodpressure = arrPatientTests[13].substring(1);
    visit1.bmi = arrPatientTests[14].substring(1);
    visit1.age = arrPatientTests[15].substring(1);
    visit1.doctorDiag = arrPatientTests[17].substring(1);

    res.status(200).send(visit1);
});

app.get("/patient/individVisit/3", (req,res) => {
    console.log("GET -> /patient/individVisit/3");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit2= {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        doctorDiag: ''
    }
    arrPatientTests = patientTests.split(',');
    visit2.date = arrPatientTests[21].substring(2,12);
    visit2.glucose = arrPatientTests[22].substring(1);
    visit2.bloodpressure = arrPatientTests[23].substring(1);
    visit2.bmi = arrPatientTests[24].substring(1);
    visit2.age = arrPatientTests[25].substring(1);
    visit2.doctorDiag = arrPatientTests[27].substring(1);

    res.status(200).send(visit2);
});

//PROVIDERS
app.get("/provider", (_,res) => {
    console.log("GET -> /provider");
    res.sendFile(path.join(__dirname, '/public/addtestresults.html'));
});

app.post("/provider/history", addNewTestResult);
function addNewTestResult(req,res) {
    console.log("POST -> /provider/history");
    console.log("Retrieving ML predictions");
    console.log("LRD");
    let lrdResult = execFileSync('python', ['./ml/LRDiabetesPickOpener.py', req.body.age, req.body.glucose, req.body.bp, req.body.bmi]).toString();
    lrdResult = lrdResult.slice(-4);
    lrdResult = lrdResult.charAt(0);

    console.log("Accessing DB to add new test result");
    let addTestResult = execFileSync('python', ['./db/addNewTestResult.py', req.body.age, req.body.glucose, req.body.bp, req.body.bmi, lrdResult, patientHCI, providerID]).toString();
    console.log(addTestResult);
    res.status(200).send();
};

app.get("/provider/historyList", (_,res) => {
    console.log("GET -> /provider/historyList");
    res.sendFile(path.join(__dirname, '/public/historyProv.html'));
});

app.get("/provider/history", (_,res) => {
    console.log("GET -> /provider/history");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    console.log(patientTests);
    res.status(200).send(patientTests);
});
//hard coding just for demo
app.get("/provider/individVisit/2", (req,res) => {
    console.log("GET -> /provider/individVisit/2");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit0 = {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        ml: ''
    }
    arrPatientTests = patientTests.split(',');
    visit0.date = arrPatientTests[1].substring(2,12);
    visit0.glucose = arrPatientTests[2].substring(1);
    visit0.bloodpressure = arrPatientTests[3].substring(1);
    visit0.bmi = arrPatientTests[4].substring(1);
    visit0.age = arrPatientTests[5].substring(1);
    visit0.ml = arrPatientTests[6].substring(1);

    res.status(200).send(visit0);
});

app.get("/provider/individVisit/3", (req,res) => {
    console.log("GET -> /provider/individVisit/3");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit1 = {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        ml: ''
    }
    arrPatientTests = patientTests.split(',');
    visit1.date = arrPatientTests[11].substring(2,12);
    visit1.glucose = arrPatientTests[12].substring(1);
    visit1.bloodpressure = arrPatientTests[13].substring(1);
    visit1.bmi = arrPatientTests[14].substring(1);
    visit1.age = arrPatientTests[15].substring(1);
    visit1.ml = arrPatientTests[16].substring(1);

    res.status(200).send(visit1);
});

app.get("/provider/individVisit/1", (req,res) => {
    console.log("GET -> /provider/individVisit/1");
    //get user's test result history and send it as an array
    console.log("Accessing DB to search for test results");
    let patientTests = execFileSync('python', ['./db/patientTestHistory.py', patientHCI]).toString();
    let visit2= {
        date: '',
        glucose: '',
        bloodpressure: '',
        bmi: '',
        age: '',
        ml: ''
    }
    arrPatientTests = patientTests.split(',');
    visit2.date = arrPatientTests[31].substring(2,12);
    visit2.glucose = arrPatientTests[32].substring(1);
    visit2.bloodpressure = arrPatientTests[33].substring(1);
    visit2.bmi = arrPatientTests[34].substring(1);
    visit2.age = arrPatientTests[35].substring(1);
    visit2.ml = arrPatientTests[36].substring(1).charAt(1);

    res.status(200).send(visit2);
});

app.post("/provider/diagnosis", addDocDiagnosis);
function addDocDiagnosis(req,res) {
    console.log("POST -> /provider/diagnosis");

    console.log("Accessing DB to add diagnosis");
    let addDiag = execFileSync('python', ['./db/addDiagnosis.py', req.body.diagnosis, testResultID]).toString();
    console.log(addDiag);
    res.status(200).send();
};

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


