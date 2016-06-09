document.getElementById('stopButton').onclick = illuminateStopLight;
document.getElementById('slowButton').onclick = illuminateSlowLight;
document.getElementById('goButton').onclick = illuminateGoLight;


//  Define Variables
var runningSeconds = 0;
var seconds = 0;
var milliseconds = 1000;

//  Setup timer to update variables
setInterval(setTime, milliseconds);

function setTime(){
	++runningSeconds;
	//console.log("Running for " + runningSeconds * (milliseconds/1000) + " seconds");
	//console.log("Light number " + seconds);
	updateLights();
	seconds = (runningSeconds % 3);
}

// Use function to identify (based on variables) which light is supposed to be turned on and change it

//setInterval(updateLights, milliseconds);

function updateLights(){
	if (seconds==0) {
		illuminateStopLight();
		//console.log("turning on Red");
	} else if (seconds==1) {
		illuminateSlowLight();
		//console.log("turning on Yellow");
	} else if (seconds==2) {
		illuminateGoLight();
		//console.log("turning on Green");
	} else {
		clearLights();
	};
};

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

// on stopButton click
	// turn off all lights
	// turn on stopLight
function illuminateStopLight(){
	clearLights();
	document.getElementById('stopLight').style.backgroundColor = "red";
}


// on slowButton click
	// turn off all lights
	// turn on slowLight
function illuminateSlowLight(){
	clearLights();
	document.getElementById('slowLight').style.backgroundColor = "yellow";
}


// on goButton click
	// turn off all lights
	// turn on goLight
function illuminateGoLight(){
	clearLights();
	document.getElementById('goLight').style.backgroundColor = "green";
}