//Model

var counterValue = 0;
var counterColor = 'black';


//View

function renderCounter() {
	$('#counter').html(counterValue).css('color', counterColor);
}


//Controller

function setup() {
	renderCounter();
	$('#countUp').on('click', increase);
	$('#countDown').on('click', decrease);
	$('#countReset').on('click', reset);
}


// I don't like writing not-DRY code but this seems like the answer y'all are looking for?


function increase() {
	counterValue++;
	setColor();
	renderCounter();
}

function decrease() {
	counterValue--;
	setColor();
	renderCounter();
}

function reset() {
	counterValue = 0;
	setColor();
	renderCounter();
}

function setColor() {
	if (counterValue < 0) counterColor = 'blue';
	else if (counterValue > 100) counterColor = 'red';
	else counterColor = 'black';

}

$(document).ready(setup);