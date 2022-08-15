let expression = '';

function calculate(i) {
	expression += i;
	document.getElementsByClassName('block1')[0].innerHTML = expression;

}

function deleteNum() {
	document.getElementsByClassName('block1')[0].innerHTML = '0';
	expression = '';
}

function equale() {
	document.getElementsByClassName('block1')[0].innerHTML = eval(expression);
	expression = '';
}