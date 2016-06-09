

// click on gray button
document.getElementById('grayButton').onclick = changeToGray;
	//call changeToGray

function changeToGray(){
	// change the background color
	document.body.style.backgroundColor = "gray";
	// change the text color
	document.body.style.color = "white";
}  // end of changeToGray



// click on white button
document.getElementById('whiteButton').onclick = changeToWhite;
	//call changeToWhite

function changeToWhite(){
	// change the background color
	document.body.style.backgroundColor = "white";
	// change the text color
	document.body.style.color = "black";
}

