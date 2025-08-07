// requires scripts/slides.js

var slideAutoScroll;

function loggedInGreeter() {
	let username = getNameOfLoggedInUser()
	if (username !== null)
		document.getElementById("jumbotext-foot").textContent = 
			"Welcome back, " + username;
}

function main() {
	slideAutoScroll = window.setInterval(function() {
		iterateSlide(true, "slidcol_news");
	}, 10000); // 10 sec

	document.getElementById("slidebutton-back").addEventListener(
		"click", function() {
			iterateSlide(false, "slidcol_news"); 
			window.clearInterval(slideAutoScroll);
		}
	);
	document.getElementById("slidebutton-next").addEventListener(
		"click", function() {
			iterateSlide(true, "slidcol_news"); 
			window.clearInterval(slideAutoScroll);
		}
	);

	loggedInGreeter();
} window.addEventListener("load", main);