//vol = (4/3)(pi)r^3

submit.onclick = volumeCalc; 

function volumeCalc() {
	var radius = document.getElementById("radius").value; 
	var volume = (4/3)*Math.PI*Math.pow(radius, 3);
	if (isNaN(radius)) {
		document.getElementById("calc").innerHTML = "Volume:";
		document.getElementById("incorrect").innerHTML = "Please enter a positive number.";
	} else if (radius < 0) {
		document.getElementById("calc").innerHTML = "Volume:";
		document.getElementById("incorrect").innerHTML = "Please enter a positive number.";
	} else {
	document.getElementById("calc").innerHTML = "Volume: " + volume.toFixed(2);
	document.getElementById("incorrect").innerHTML = "";
	}
	// console.log(volume);
}