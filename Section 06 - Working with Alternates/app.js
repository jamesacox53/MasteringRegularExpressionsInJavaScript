/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

function switchFirstNamesAndLastNames(namesArr) {
	const switchedNamesArr = namesArr.map(_switchFirstNameAndLastName);

	return switchedNamesArr;
}

function _switchFirstNameAndLastName(name) {
	const nameRegex = /^(?<last>\w+), (?<first>\w+)$/;

	const arr = nameRegex.exec(name);

	if (!arr)
		return null;

	const switchedNameString = arr.groups.first + " " + arr.groups.last;

	return switchedNameString;
}

console.log(switchFirstNamesAndLastNames(data));