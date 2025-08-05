var slideAutoScroll;

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
} window.addEventListener("load", main);