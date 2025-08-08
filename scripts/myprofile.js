// requires scripts/backend-sim/account.js
// requires scripts/validateaccountform.js

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

function changeUserInfo() {
	let UID = getUIDOfLoggedInUser();
	let accData = Account.retrieveAccount(UID);

	accData.email   = document.getElementById("email").value;
	accData.adminno = document.getElementById("adminno").value;
	accData.name    = document.getElementById("fullname").value;
	accData.school  = document.getElementById("school").value;
	accData.classno = document.getElementById("class").value;
	accData.bday    = document.getElementById("bday").value;
	accData.year    = document.getElementById("year").value;
	
	let newPass = document.getElementById("newpassword");
	if (newPass.value != '')
		accData.password = newPass.value;

	Account.deleteAccountEntry(UID); // refresh entry
	accData.setAccountEntry();

	setLoggedInUser(accData.name, accData.adminno);

	alert("Your info has been changed.");
	window.location.reload();
}

function overridePasswordHandler() {
	let newPass = document.getElementById("newpassword");
	let passRet = document.getElementById("passwordretype");

	newPass.removeEventListener("input", checkPasswordStrength);
	passRet.removeEventListener("input", checkRetypedPassword);

	newPass.addEventListener(
		"input", function() {checkPasswordStrength(true);}
	);
	passRet.addEventListener(
		"input", function() {checkRetypedPassword(true);}
	);
}

function formEditedEnableChangeInfoButton() {
	let submitbtn = document.getElementById("submitedits");
	submitbtn.disabled = false;

	let form = document.getElementById("form_editacc");
	form.removeEventListener("input", formEditedEnableChangeInfoButton);
}

function main() {
	let username = getNameOfLoggedInUser()
	if (username !== null) {
		displayUserData(); // display user data first before we show the page
		
		// unhide the page
		document.getElementById("docbody").setAttribute("style", '');

		// set custom page title
		document.getElementById("pageTitle").textContent = username + "'s account"

		// custom handlers for passwords
		overridePasswordHandler();

		// detect if form edited, then set save button to active
		let form = document.getElementById("form_editacc");
		form.addEventListener("input", formEditedEnableChangeInfoButton);

		// make form submission do stuff
		form.addEventListener("submit", function(event) {
			event.preventDefault(); changeUserInfo();
		});
	} else { // handle non logged ins by kicking them straight back to homepage
		alert("You are forbidden to access this page.")
		window.location.href = "home.html";
	}
} window.addEventListener("load", main);