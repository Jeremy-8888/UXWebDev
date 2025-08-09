function setArticleFontSize(toSize) {
	const MAIN = document.getElementsByTagName("main").item(0);
	MAIN.style.fontSize = toSize;
}

function setDarkMode() {
	const BODYSTYLE = document.getElementsByTagName("body").item(0).style;
	BODYSTYLE.backgroundColor = "#1f2022";
	BODYSTYLE.color = "#fff";
}

function setLightMode() {
	const BODYSTYLE = document.getElementsByTagName("body").item(0).style;
	BODYSTYLE.backgroundColor = "#fff";
	BODYSTYLE.color = "#202325ff";
}

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
} window.addEventListener("load", main);