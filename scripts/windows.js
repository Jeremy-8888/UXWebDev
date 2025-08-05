// requires scripts/util.js

function clickSelectWindow(targWindow, onBtn) {
	/* EXPECTED STRUCTURE FOR BUTTONS AND WINDOWS
		C: windowcollection I:*binding ID for windows* 
		  C:*any*
		    C:window I:*buttons parent window ID*
		      C:buttonselection
	*/

	const WINDOWSBINDING = getIDofParentClass(onBtn, "windowcollection");
	const WINDOWCOLLECTION = document.getElementById(WINDOWSBINDING);
	const WINDOWS = WINDOWCOLLECTION.getElementsByClassName("window");

	// get button group to remove any set actives
	const BUTTONS = onBtn.parentElement.children
	for (let i = 0; i < BUTTONS.length; i++) {
		let thisBtn = BUTTONS[i];
		thisBtn.classList.remove("active");
	}
	const IDBUTTONWINDOW = getIDofParentClass(onBtn, "window");

	onBtn.classList.add("active"); // set button as active

	for (let i = 0; i < WINDOWS.length; i++) {
		let window = WINDOWS[i];
		let windowClasses = window.classList;
		// set visible to target window
		if (windowClasses.contains(targWindow))	
			windowClasses.remove("window-sethidden");
		
		// leave button window alone when seting window displays to hidden
		else if (window.id !== IDBUTTONWINDOW &&!windowClasses.contains("window-sethidden")	)
			windowClasses.add("window-sethidden");
	}
}