// requires scripts/backend-sim/account.js

function displayUserData() {
	let UID = getUIDOfLoggedInUser();
	let accData = Account.retrieveAccount(UID);

	document.getElementById("email").value    = accData.email;
	document.getElementById("adminno").value  = accData.adminno;
	document.getElementById("fullname").value = accData.name;
	document.getElementById("school").value   = accData.school;
	document.getElementById("class").value    = accData.classno;
	document.getElementById("bday").value     = accData.bday;
	document.getElementById("year").value     = accData.year;
}

function formEditedEnableChangeInfoButton() {
	let submitbtn = document.getElementById("submitedits");
	submitbtn.disabled = false;
}

function main() {
	let username = getNameOfLoggedInUser()
	if (username !== null) {
		displayUserData(); // display user data first before we show the page
		
		// unhide the page
		document.getElementById("docbody").setAttribute("style", '');

		// set custom page title
		document.getElementById("pageTitle").textContent = username + "'s account"

		// detect if form edited, then set save button to active
		let form = document.getElementById("form_editacc");
		form.addEventListener("input", formEditedEnableChangeInfoButton);
		
	} else { // handle non logged ins by kicking them straight back to homepage
		alert("You are forbidden to access this page.")
		window.location.href = "home.html";
	}
} window.addEventListener("load", main);