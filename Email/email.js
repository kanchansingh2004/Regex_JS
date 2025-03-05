//FUnction to check the validity
function isValidEmail(email) {
    const emailRegex = /^abc([a-zA-Z0-9._%+-]*)@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
}

//Checking multiple cases
console.log(isValidEmail("abc@bridgelabz.co")); 
console.log(isValidEmail("abc123@bridgelabz.co")); 
console.log(isValidEmail("abc-xyz@bridgelabz.co.us")); 
console.log(isValidEmail("xyz@bridgelabz.co.in")); 
console.log(isValidEmail("abc@xyz.co.in")); 