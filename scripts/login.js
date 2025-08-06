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

function main() {
	const NEWPASS = document.getElementById("newpassword");
	const PASSRET = document.getElementById("passwordretype");

	NEWPASS.addEventListener("input", checkPasswordStrength);
	PASSRET.addEventListener("input", checkRetypedPassword);

	openSignup();
	setPageVisible();
} window.addEventListener("load", main);
