class Account {
	constructor(adminno, email, name, school, classno, bday, password) {
		this.adminno = adminno;
		this.email = email;
		this.name = name;
		this.school = school;
		this.classno = classno;
		this.bday = bday;
		this.password = password;
	}

	serialize() {
		return JSON.stringify(this);
	}

	static deserialize(jsonString) {
		if (typeof jsonString !== "string") {
			console.error("Can't deserialize; not a string!");
			return null;
		}
		
		const DATA = JSON.parse(jsonString);
		return new Account(
			DATA.adminno,
			DATA.email,
			DATA.name,
			DATA.school,
			DATA.classno,
			DATA.bday,
			DATA.password
		)
	}
}

function retrieveAccount(adminno) {
	return new Account.deserialize(localStorage.retrieveAccount(adminno));
}

function setAccountEntry(adminno, account) {
	if (!account instanceof Account) {
		console.error("Argument`account` should be an `Account` instance!");
		return;
	}

	localStorage.setItem(
		adminno,
		account.serialize()
	)
}

function deleteAccountEntry(adminno) {
	localStorage.removeItem(adminno);
}