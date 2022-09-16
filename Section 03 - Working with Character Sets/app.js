/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];

function getPhoneNumbersWith801AreaCode(phoneNumbersArray) {
    const PhoneNumbersWith801AreaCode = [];

    for(let i = 0; i < phoneNumbersArray.length; i++) {
        const phoneNumber = phoneNumbersArray[i];
    
        if (_isPhoneNumber801AreaCode(phoneNumber))
            PhoneNumbersWith801AreaCode.push(phoneNumber);
    }

    return PhoneNumbersWith801AreaCode;
}

function _isPhoneNumber801AreaCode(phoneNumber) {
    const match = phoneNumber.search(/801\-\d\d\d\-\d\d\d\d/);

    if (match === 0)
        return true;

    return false;
}


const PhoneNums801 = getPhoneNumbersWith801AreaCode(phoneNums);

console.log(PhoneNums801);