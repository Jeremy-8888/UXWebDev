function getIDofParentClass(child, findClass) {
	let currElem = child.parentElement;

	while (currElem instanceof Element) {
		if (currElem.classList.contains(findClass))
			return currElem.id;
		currElem = currElem.parentElement;
	}
	return null;
} 