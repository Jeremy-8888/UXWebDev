function setLoggedInUser(fullname) {
	let cookieVal = JSON.stringify({
		"loggedIn": fullname
	});

	document.cookie = cookieVal;
}

function getNameOfLoggedInUser() {
	let cookieVal = document.cookie;

	if (cookieVal === '' || cookieVal === null) return null;

	let name = JSON.parse(
		document.cookie
	)["loggedIn"];

	if (name === undefined) return null;

	return name;
}

function logoutCurrentUser() {
	document.cookie = '';
}