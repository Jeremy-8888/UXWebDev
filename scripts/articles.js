function setArticleFontSize(toSize) {
	const MAIN = document.getElementsByTagName("main").item(0);
	MAIN.style.fontSize = toSize;
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
} window.addEventListener("load", main);