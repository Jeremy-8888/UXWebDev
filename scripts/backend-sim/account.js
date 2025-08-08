class Account {
	constructor(email, adminno, name, school, classno, bday, year, password) {
		this.email = email;
		this.adminno = adminno.toUpperCase();
		this.name = name;
		this.school = school;
		this.classno = classno;
		this.bday = bday;
		this.year = year;
		this.password = password;
	}

	serialize() {
		return JSON.stringify(this);
	}

	setAccountEntry() {
		localStorage.setItem(this.adminno, this.serialize());
	}

	static deserialize(jsonString) {
		if (typeof jsonString !== "string") {
			console.error("Can't deserialize; not a string!");
			return null;
		}
		
		const DATA = JSON.parse(jsonString);
		return new Account(
			DATA.email,
			DATA.adminno,
			DATA.name,
			DATA.school,
			DATA.classno,
			DATA.bday,
			DATA.year,
			DATA.password
		)
	}
	
	static retrieveAccount(adminno) {
		return Account.deserialize(localStorage.getItem(adminno.toUpperCase()));
	}

	static deleteAccountEntry(adminno) {
		localStorage.removeItem(adminno.toUpperCase());
	}

	static isAccountExist(adminno) {
		return localStorage.getItem(adminno.toUpperCase()) !== null;
	}

	static isCorrectPassword(adminno, password) {
		if (!Account.isAccountExist(adminno.toUpperCase())) return false;

		let accInfo = Account.retrieveAccount(adminno.toUpperCase());
		return accInfo.password === password;
	}
}

function setLoggedInUser(fullname, adminno) {
	let currentUser = [fullname, adminno.toUpperCase()]

	localStorage.setItem("LOGGEDINAS", JSON.stringify(currentUser));
}

function getNameOfLoggedInUser() {
	let currentUser = localStorage.getItem("LOGGEDINAS");
	if (currentUser === null) return null;

	return JSON.parse(currentUser)[0];
}

function getUIDOfLoggedInUser() {
	let currentUser = localStorage.getItem("LOGGEDINAS");
	if (currentUser === null) return null;

	return JSON.parse(currentUser)[1];
}

function logoutCurrentUser() {
	localStorage.removeItem("LOGGEDINAS");
}