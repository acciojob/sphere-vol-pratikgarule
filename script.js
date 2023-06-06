let radius = document.getElementById("radius");
let result = document.getElementById("result");
let myCanvas = document.getElementById("myCanvas");
let painter = myCanvas.getContext("2d");
let temp = 0;
let x = myCanvas.width / 2;
let y = myCanvas.height / 2;

function autoDraw() {


    if (temp < 250) {
        painter.beginPath();
        painter.strokeStyle = "white";
        painter.arc(x, y, temp, 0, 2 * Math.PI);
        painter.stroke();
        temp++;
    }
    else {
        clearInterval(timer);
        temp = 0;
    }
}
let timer = setInterval(autoDraw, 100);




function calculate() {
    let sphereVolume = 0;
    clearInterval(timer);
    let valCheck = validation();
    if (valCheck) {
        sphereVolume = (4 * Math.PI * Number(radius.value) ** 3) / 3;
        result.innerText = `The volume is : ${sphereVolume.toFixed(2)}`;
        drawCircle();

    }
}


function validation() {
    let r = Number(radius.value)
    if (r > 0) {

        if (x - r > 0 && y - r > 0 && x + r < myCanvas.width && y + r < myCanvas.height) {


            return true
        }

        else {
            alert(`Radius validation - size restriction (lower than 250)`);
        }

    }

    else {
        alert(`Invalid radius - radius cant be null or negative`);
    }

}


function drawCircle() {
    painter.beginPath();
    painter.strokeStyle = "white";
    painter.arc(x, y, Number(radius.value), 0, 2 * Math.PI);
    painter.stroke();
}


function clearCanvas() {
    clearInterval(timer);
    painter.beginPath();
    painter.clearRect(0, 0, 500, 500)
    painter.stroke();
}