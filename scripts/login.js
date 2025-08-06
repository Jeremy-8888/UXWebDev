function openSignup() {
	document.getElementById
	if (new URL(window.location.href).searchParams.get("signup") !== null) {
		let signupBtn = document.getElementById("loginbtn");
		clickSelectWindow('winds_signup', signupBtn);
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