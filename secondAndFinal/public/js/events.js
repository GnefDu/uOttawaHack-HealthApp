//PATIENTS
function listHistory() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = req.response.split(",");
      let elem1 = historyList[1].replace("\'", ' ').replace("\'", ' ');
      let elem2 = historyList[11].replace("\'", ' ').replace("\'", ' ');
      let elem3 = historyList[21].replace("\'", ' ').replace("\'", ' ');
      if (historyList.length > 35) {
        elem1 = historyList[31].replace("\'", ' ').replace("\'", ' ');
        elem2 = historyList[1].replace("\'", ' ').replace("\'", ' ');
        elem3 = historyList[11].replace("\'", ' ').replace("\'", ' ');
      }
      listdiv.innerHTML = `<div class="btnClass" id="content"> <button class="btn" id="one" type="button" onclick="individualVisit1()">Test Result from   ${elem1}  </button> <button style="font-size: 0.73em;" class="btn"> <i class="fa fa-plus" style="font-size:48px"></i></button> <br>

      <button class="btn" id="two" type="button" onclick="individualVisit2()">Test Result from   ${elem2} </button>
      <button style="font-size: 0.73em;" class="btn">
      <i class="fa fa-plus" style="font-size:48px"></i></button> <br>

      <button class="btn" id="three" type="button" onclick="individualVisit3()">Test Result from   ${elem3} </button>
      <button style="font-size: 0.73em;" class="btn">
      <i class="fa fa-plus" style="font-size:48px"></i> </button> <br> </div>`;
    }
	}

	req.open("GET", `/patient/history`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function individualVisit1() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p>👩‍⚕️ Doctor's Diagnosis:</p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.doctorDiag}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/patient/individVisit/1`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function individualVisit2() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p>👩‍⚕️ Doctor's Diagnosis:</p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.doctorDiag}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/patient/individVisit/2`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function individualVisit3() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p>👩‍⚕️ Doctor's Diagnosis:</p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.doctorDiag}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/patient/individVisit/3`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

//PROVIDER
function addTestResult() {
  let ageInput = document.getElementById('age').value;
  let glucoseInput = document.getElementById('glucose').value;
  let bpInput = document.getElementById('bp').value;
  let bmiInput = document.getElementById('bmi').value;
  let newTestResult = {
    age: ageInput,
    glucose: glucoseInput,
    bp: bpInput,
    bmi: bmiInput
  }
  console.log(newTestResult);
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      window.location.replace("http://localhost:3000/provider/historyList");
    }
	}

	req.open("POST", `/provider/history`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(newTestResult));
}

function listHistoryProv() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = req.response.split(",");
      let elem1 = historyList[31].replace("\'", ' ').replace("\'", ' ');
      let elem2 = historyList[1].replace("\'", ' ').replace("\'", ' ');
      let elem3 = historyList[11].replace("\'", ' ').replace("\'", ' ');
      listdiv.innerHTML = `<div class="btnClass" id="content"> <button class="btn" id="one" type="button" onclick="individualVisitPro1()">Test Result from   ${elem1}  </button> <button style="font-size: 0.73em;" class="btn" onclick="addDiagnosis()"> <i class="fa fa-plus" style="font-size:48px"></i></button> <br>

      <button class="btn" id="two" type="button" onclick="individualVisitPro2()">Test Result from   ${elem2} </button>
      <button style="font-size: 0.73em;" class="btn" onclick="addDiagnosis()">
      <i class="fa fa-plus" style="font-size:48px"></i></button> <br>

      <button class="btn" id="three" type="button" onclick="individualVisitPro3()">Test Result from   ${elem3} </button>
      <button style="font-size: 0.73em;" class="btn" onclick="addDiagnosis()">
      <i class="fa fa-plus" style="font-size:48px"></i> </button> <br> </div>`;
    }
	}

	req.open("GET", `/provider/history`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function addDiagnosis() {
  let diagnosisInput = prompt("Please enter the diagnosis:");
  let returnObj = {
    diagnosis: diagnosisInput
  };
  console.log(returnObj);
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      window.location.replace("http://localhost:3000/provider/historyList");
    }
	}

	req.open("POST", `/provider/diagnosis`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send(JSON.stringify(returnObj));
}

function individualVisitPro1() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p> ML Prediction: </p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.ml}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/provider/individVisit/1`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function individualVisitPro2() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p> ML Prediction: </p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.ml}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/provider/individVisit/2`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}

function individualVisitPro3() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = JSON.parse(req.response);
      console.log(historyList);
      listdiv.innerHTML =
      `<div id='content' class='jumbotron text-center'>
              <p>Day of visit: ${historyList.date}</p>
              <br />
              <div class="container">
                <div class="row">
                  <div class="col">Age: ${historyList.age}</div>
                  <br />
                  <div class="col">Glucose: ${historyList.glucose}</div>
                  <br />
                  <div class="w-100"></div>
                  <br />
                  <div class="col">BMI: ${historyList.bmi}</div>
                  <br />
                  <div class="col">BP: ${historyList.bloodpressure}</div>
                  <br />
                  <br />
                </div>
              </div>
              <br />
              <p> ML Prediction: </p>
              <br />
              <div class="row justify-content-center">
                <div class="col-8">
                  <p>
                  ${historyList.ml}
                  </p>
                  <br />
                </div>
            </div>`
    }
	}

	req.open("GET", `/provider/individVisit/3`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}