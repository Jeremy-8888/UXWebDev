

function main() {
	let username = getNameOfLoggedInUser()
	if (username !== null) { 
		// unhide the page
		document.getElementById("docbody").setAttribute("style", '');

		document.getElementById("pageTitle").textContent = username + "'s account"
		
	} else { // handle non logged ins by kicking them straight back to homepage
		alert("You are forbidden to access this page.")
		window.location.href = "home.html";
	}
} window.addEventListener("load", main);