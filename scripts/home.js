
var currSlideIdx = 0;
var slides = [];

function showCorrectWindows(windclass) {
	const WINDOWS = document.getElementsByClassName("window");
	for (let i = 0; i < WINDOWS.length; i++) {
		let window = WINDOWS[i];

		// check if correct window, un-none the display
		if (window.classList.contains(windclass)) 
			window.setAttribute("style", null);
		else if (!window.classList.contains("wind_buttons")) // dumb hack to prevent
			window.setAttribute("style", "display: none;")   // hiding the buttons
	}
}

function loadSlidesInfo() {
	const SLIDESHOWITEMS = document.getElementsByClassName("slideshow-item");
	for (let i = 0; i < SLIDESHOWITEMS.length; i++) {
		let slideObj = SLIDESHOWITEMS[i];
		let name = slideObj.getAttribute("id");
		slides.push(name);

		if (slideObj.classList.contains("slide-visible")) {
			currSlideIdx = i;
		}
	}
}

function iterateSlide(forward) {	
	const LEN = slides.length;

	document.getElementById(slides[currSlideIdx]).className = 
		"slideshow-item";
	if (forward) {
		if (currSlideIdx + 1 < LEN) currSlideIdx++;
		else currSlideIdx = 0;
	} else {
		if (currSlideIdx - 1 >= 0) currSlideIdx--;
		else currSlideIdx = LEN - 1;
	}

	document.getElementById(slides[currSlideIdx]).className = 
		"slideshow-item slide-visible";
}

function main() {
	loadSlidesInfo();

	document.getElementById("slidebutton-back").addEventListener(
		"click", function() {iterateSlide(false);}
	);
	document.getElementById("slidebutton-next").addEventListener(
		"click", function() {iterateSlide(true);}
	);


} window.addEventListener("load", main);