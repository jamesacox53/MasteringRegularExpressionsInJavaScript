/*
The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
*/

function replaceDaysOfWeekInTextWithMonday(text) {
	if (!text)
		return text;

	const text1 = text.replace(/\btuesday\b/g, "monday");
	const text2 = text1.replace(/\bTuesday\b/g, "Monday");

	const text3 = text2.replace(/\bwednesday\b/g, "monday");
	const text4 = text3.replace(/\bWednesday\b/g, "Monday");

	const text5 = text4.replace(/\bthursday\b/g, "monday");
	const text6 = text5.replace(/\bThursday\b/g, "Monday");

	const text7 = text6.replace(/\bfriday\b/g, "monday");
	const text8 = text7.replace(/\bFriday\b/g, "Monday");

	const text9 = text8.replace(/\bsaturday\b/g, "monday");
	const text10 = text9.replace(/\bSaturday\b/g, "Monday");

	const text11 = text10.replace(/\bsunday\b/g, "monday");
	const text12 = text11.replace(/\bSunday\b/g, "Monday");

	return text12;
}

console.log(replaceDaysOfWeekInTextWithMonday(text1));