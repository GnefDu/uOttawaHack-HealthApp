function listHistory() {
  let req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		if(this.readyState==4 && this.status==200){
      let listdiv = document.getElementById('content');
      let historyList = req.response.split(",");
      let elem1 = historyList[1].replace("\'", ' ').replace("\'", ' ');
      let elem2 = historyList[9].replace("\'", ' ').replace("\'", ' ');
      let elem3 = historyList[17].replace("\'", ' ').replace("\'", ' ');
      listdiv.innerHTML = `<button type="button">Test Result from ${elem1} </button><br><button type="button">Test Result from ${elem2}</button><br><button type="button">Test Result from ${elem3}</button><br>`;
    }
	}

	//Send a POST request to the server containing the recipe data
	req.open("GET", `/patient/history`);
	req.setRequestHeader("Content-Type", "application/json");
	req.send();
}
