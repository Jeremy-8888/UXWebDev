function getAccesibilityCfg() {
	let accesibilityCfg = localStorage.getItem("acessibilityCfg");
	if (accesibilityCfg === null) return null;
	return JSON.parse(accesibilityCfg);
}

function loadAccesibilityCfg() {
	let accesibilityCfg = getAccesibilityCfg();
	if (accesibilityCfg === null) return;

	document.getElementById(accesibilityCfg[0]).click();
	document.getElementById(accesibilityCfg[1]).click();
}

function setAccesibilityCfg() {
	const SELECTEDFONTELEM = document.querySelector('input[name="fontsizeselect"]:checked').id;
	const SELECTEDTHEMEELEM = document.querySelector('input[name="pagethemeselect"]:checked').id;
	let accesibilityCfg = JSON.stringify([SELECTEDFONTELEM, SELECTEDTHEMEELEM]);
	localStorage.setItem("acessibilityCfg", accesibilityCfg);
}

function setArticleFontSize(toSize) {
	setAccesibilityCfg();

	const MAIN = document.getElementsByTagName("main").item(0);
	MAIN.style.fontSize = toSize;
}

function setDarkMode() {
	setAccesibilityCfg();

	const BODYSTYLE = document.getElementsByTagName("body").item(0).style;
	BODYSTYLE.backgroundColor = "#1f2022";
	BODYSTYLE.color = "#fff";
}

function setLightMode() {
	setAccesibilityCfg();

	const BODYSTYLE = document.getElementsByTagName("body").item(0).style;
	BODYSTYLE.backgroundColor = "#fff";
	BODYSTYLE.color = "#202325ff";
}

function preloadDarkTheme() { // prevent blinding user on load with FOUC when using dark mode
	let accesibilityCfg = getAccesibilityCfg();
	if (accesibilityCfg === null) return;
	if (accesibilityCfg[1] === "selectdark") {
		let styles = document.createElement('link');
		styles.rel="stylesheet";
		styles.type="text/css";
		styles.href="../styles/articles-darkmode.css";
		document.head.appendChild(styles);
	}
}
preloadDarkTheme();

function main() {
	document.getElementById("selectsmall").addEventListener(
		"change", function() {setArticleFontSize("small");}
	);
	document.getElementById("selectmedium").addEventListener(
		"change", function() {setArticleFontSize("medium");}
	);
	document.getElementById("selectlarge").addEventListener(
		"change", function() {setArticleFontSize("large");}
	);

	document.getElementById("selectdark").addEventListener("change", setDarkMode);
	document.getElementById("selectlight").addEventListener("change", setLightMode);

	loadAccesibilityCfg();
} window.addEventListener("load", main);