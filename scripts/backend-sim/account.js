class Account {
	constructor(email, adminno, name, school, classno, bday, year, password) {
		this.email = email;
		this.adminno = adminno;
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
		return new Account.deserialize(localStorage.getItem(adminno));
	}

	static deleteAccountEntry(adminno) {
		localStorage.removeItem(adminno);
	}
}



