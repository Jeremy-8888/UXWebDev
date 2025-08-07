// requires scripts/backend-sim/account.js

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

function checkRetypedPassword() {
	const NEWPASSVAL = document.getElementById("newpassword").value;
	const PASSRET = document.getElementById("passwordretype");

	PASSRET.setCustomValidity("");

	if (NEWPASSVAL !== PASSRET.value) {
		PASSRET.setCustomValidity("Ensure that the retyped passwords match.");
	}
}

function checkPasswordStrength() {
	const NEWPASS = document.getElementById("newpassword");
	const NEWPASSVAL = NEWPASS.value;

	NEWPASS.setCustomValidity("");
	
	if (NEWPASSVAL.length <= 8) {
		NEWPASS.setCustomValidity("Increase password length to more than 8 characters!");
		return;
	}

	if (!/[0-9]/.test(NEWPASSVAL)) {
		NEWPASS.setCustomValidity("Add numbers to your password!");
		return;
	}

	if (!/[a-z]/.test(NEWPASSVAL)) {
		NEWPASS.setCustomValidity("Add small letters to your password!");
		return;
	}

	if (!/[A-Z]/.test(NEWPASSVAL)) {
		NEWPASS.setCustomValidity("Add capital letters to your password!");
		return;
	}

	if (!/[^A-Za-z0-9]/.test(NEWPASSVAL)) {
		NEWPASS.setCustomValidity("Add special symbols to your password!");
		return;
	}
}

function checkBirthdayAge() {
	const AGE = document.getElementById("age");
	const BDAY = new Date(document.getElementById("bday").value);

	AGE.setCustomValidity("");
	
	let yearsSince = Math.floor((new Date() - BDAY) / 31536000000); // 1y to ms

	if (AGE.value != yearsSince)
		AGE.setCustomValidity("Age does not match birthday.");
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
	setLoggedInUser(FULLNAME);
	console.log(document.cookie);
	alert("Account sucessfully created!\nPress 'OK' to redirect to account page...");
	window.location.href = "myprofile.html";
}

function loginUser() {
	const ADMINNO = document.getElementById("loginadminno").value;
	const PASSWRD = document.getElementById("loginpassword").value;

	if (Account.isCorrectPassword(ADMINNO, PASSWRD)) {
		let username = Account.retrieveAccount(ADMINNO).name;
		setLoggedInUser(username);
		alert("Succesfully logged in as " + username);
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
