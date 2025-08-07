// requires scripts/backend-sim/account.js

function loadMyAccountToNavbar() {
	let username = getNameOfLoggedInUser()
	if (username !== null) {
		document.getElementById("accountnavbarlink").textContent = username;
		document.getElementById("loginnavbaritem").style.display = "none";
		document.getElementById("accountnavbaritem").style.display = "inline";
	}
}

function main() {
	loadMyAccountToNavbar();
} window.addEventListener("load", main);