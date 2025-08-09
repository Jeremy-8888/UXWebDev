// requires account.js

function getArticleCommentsID() {
	let pageLocation = window.location.pathname;
	pageLocation = pageLocation.split('/').pop();
	
	let commentsID = "COMMENTS_" + pageLocation;
	return commentsID;
}

function getComments() {
	let comments = localStorage.getItem(getArticleCommentsID());
	if (comments === null) return [];

	return JSON.parse(comments);
}

function addComment() {
	let currentUser = getNameOfLoggedInUser();
	let time = new Date();
	let comment = document.getElementById("usercomment").value;
	time = `${time.getUTCFullYear()}-${time.getUTCMonth()}-${time.getUTCDay()} ${time.getUTCHours()}:${time.getUTCMinutes()}:${time.getUTCSeconds()}`

	let commentInfo = [currentUser, time, comment];
	let comments = getComments();

	comments.push(commentInfo)
	localStorage.setItem(
		getArticleCommentsID(), JSON.stringify(comments)
	);
}