/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/

function validatePhoneNumber(phoneEl) {
	const phoneNumber = phoneEl.value;

	if (_isPhoneNumberValid(phoneNumber)) {
		_turnElementTextGreen(phoneEl);
	
	} else {
		_turnElementTextRed(phoneEl);
	}
}


function _isPhoneNumberValid(phoneNumber) {
    if (!phoneNumber)
    	return false;

	// (nnn)-nnn-nnnn
    if ((/\(\d{3}\)-\d{3}-\d{4}/).test(phoneNumber))
    	return true;

    // nnn.nnn.nnnn
    if ((/\d{3}\.\d{3}\.\d{4}/).test(phoneNumber))
    	return true;

	// nnn-nnn-nnnn
	if ((/\d{3}-\d{3}-\d{4}/).test(phoneNumber))
    	return true;

	// nnnnnnnnnn
	if ((/\d{10}/).test(phoneNumber))
    	return true;

    // (nnn)nnn-nnnn
	if ((/\(\d{3}\)\d{3}-\d{4}/).test(phoneNumber))
    	return true;

    return false;
}

function _turnElementTextGreen(element) {
	element.classList.remove("red");

	element.classList.add("green");
}

function _turnElementTextRed(element) {
	element.classList.remove("green");

	element.classList.add("red");
}


const phoneEl = document.getElementById("phone");
phoneEl.addEventListener("keyup", (ev) => validatePhoneNumber(phoneEl));