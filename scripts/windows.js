function showCorrectWindows(windclass, onBtn) {
	const WINDOWS = document.getElementsByClassName("window");

	const BUTTONCLASSLIST = onBtn.classList;
	let buttonClass;
	for (let i = 0; i < BUTTONCLASSLIST.length; i++) { // determine which button group called the function
		let thisClass = BUTTONCLASSLIST[i]
		if (thisClass !== "active") {
			buttonClass = thisClass;
			break;
		}
	}

	const BUTTONSGROUP = document.getElementsByClassName(buttonClass)
	for (let i = 0; i < BUTTONSGROUP.length; i++) {
		let button = BUTTONSGROUP[i];
		button.classList.remove("active")
	}

	onBtn.classList.add("active");
	
	for (let i = 0; i < WINDOWS.length; i++) {
		let window = WINDOWS[i];
		// check if correct window, un-none the display
		if (window.classList.contains(windclass)) 
			window.classList.remove("window-sethidden");
		else if (!window.classList.contains("wind_buttons")) // prevent hidding buttons window
			window.classList.add("window-sethidden");
	}
}