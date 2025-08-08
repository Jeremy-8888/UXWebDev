function checkRetypedPassword(ignoreEmpty = false) {
	const NEWPASSVAL = document.getElementById("newpassword").value;
	const PASSRET = document.getElementById("passwordretype");

	if (ignoreEmpty && NEWPASSVAL == '' && PASSRET == '') return;

	PASSRET.setCustomValidity("");

	if (NEWPASSVAL !== PASSRET.value) {
		PASSRET.setCustomValidity("Ensure that the retyped passwords match.");
	}
}

function checkPasswordStrength(ignoreEmpty = false) {
	const NEWPASS = document.getElementById("newpassword");
	const NEWPASSVAL = NEWPASS.value;

	if (ignoreEmpty && NEWPASSVAL == '') return;

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

function main() {
	const NEWPASS = document.getElementById("newpassword");
	const PASSRET = document.getElementById("passwordretype");
	const AGEELEM = document.getElementById("age");

	NEWPASS.addEventListener("input", checkPasswordStrength);
	PASSRET.addEventListener("input", checkRetypedPassword);
	if (AGEELEM !== null)
		AGEELEM.addEventListener("input", checkBirthdayAge)
} window.addEventListener("load", main);
