var rotatingDiv = document.getElementById('flip-card-inner');

function rotateFront(){
	rotatingDiv.classList.add("rotate-front");
}

function rotateBack(){
	rotatingDiv.classList.remove("rotate-front");
}