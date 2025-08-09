// requires scripts/backend-sim/account.js
// requires scripts/validateaccountform.js

function openSignup() {
	if (new URL(window.location.href).searchParams.get("signup") !== null) {
		let signupBtn = document.getElementById("loginbtn");
		clickSelectWindow('winds_signup', signupBtn);
		document.getElementById("navbar_signup").classList.add("active");
	} else {
		document.getElementById("navbar_login").classList.add("active");
	}
}

function setPageVisible() {
	document.getElementById("loadingscreen").style.display = "none";
	document.getElementById("maincontent").style.display = "inline";
}

function loadCreateAccFormData(signInForm) {
	const EMAIL    = document.getElementById("email").value;
	const ADMINNO  = document.getElementById("adminno").value;
	const FULLNAME = document.getElementById("fullname").value;
	const SCHOOL   = document.getElementById("school").value;
	const CLASS    = document.getElementById("class").value;
	const BDAY     = document.getElementById("bday").value;
	const YEAR     = document.getElementById("year").value;
	const PWD      = document.getElementById("newpassword").value;
	
	if (Account.isAccountExist(ADMINNO)) {
		alert("Account already exists!");
		return;
	}

	let accEntry = new Account(
		EMAIL, ADMINNO, FULLNAME, SCHOOL, CLASS, BDAY, YEAR, PWD
	);

	accEntry.setAccountEntry();
	setLoggedInUser(FULLNAME, ADMINNO);
	alert("Account sucessfully created!\nPress 'OK' to redirect to account page...");
	window.location.href = "myprofile.html";
}

function loginUser() {
	const ADMINNO = document.getElementById("loginadminno").value;
	const PASSWRD = document.getElementById("loginpassword").value;

	if (Account.isCorrectPassword(ADMINNO, PASSWRD)) {
		let username = Account.retrieveAccount(ADMINNO).name;
		setLoggedInUser(username, ADMINNO);
		alert("Sucessfully logged in as " + username);
		window.location.reload();
	} else {
		alert("Either account does not exist or you used a wrong password!");
	}
}

function main() {
	const NEWPASS = document.getElementById("newpassword");
	const PASSRET = document.getElementById("passwordretype");
	const AGEELEM = document.getElementById("age");
	const CREATEACCFORM = document.getElementById("form_createacc");
	const LOGINFORM = document.getElementById("form_login");

	NEWPASS.addEventListener("input", checkPasswordStrength);
	PASSRET.addEventListener("input", checkRetypedPassword);
	AGEELEM.addEventListener("input", checkBirthdayAge)
	CREATEACCFORM.addEventListener("submit", function(event){
		event.preventDefault(); loadCreateAccFormData(self);
	});
	LOGINFORM.addEventListener("submit", function(event) {
		event.preventDefault(); loginUser();
	});

	openSignup();
	setPageVisible();
} window.addEventListener("load", main);
