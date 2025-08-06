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

function main() {
	openSignup();
	setPageVisible();
} window.addEventListener("load", main);