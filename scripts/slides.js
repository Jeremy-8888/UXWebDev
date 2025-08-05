function iterateSlide(forward, slideBinding) {
	let currSlideIdx = 0;

	let relatedSlideCollection = document.getElementById("slidcol_news")
	const SLIDESHOWITEMS = relatedSlideCollection.getElementsByClassName("slideshow-item");
	const LEN = SLIDESHOWITEMS.length;

	for (let i = 0; i < LEN; i++) { // determine current active slide
		let slideObj = SLIDESHOWITEMS[i];

		if (slideObj.classList.contains("slide-visible")) {
			currSlideIdx = i;
			slideObj.classList.remove("slide-visible");
		}
	}

	if (forward) {
		if (currSlideIdx + 1 < LEN) currSlideIdx++;
		else currSlideIdx = 0;
	} else {
		if (currSlideIdx - 1 >= 0) currSlideIdx--;
		else currSlideIdx = LEN - 1;
	}

	SLIDESHOWITEMS[currSlideIdx].classList.add("slide-visible")
}
