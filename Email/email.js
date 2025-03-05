//Method to check the validity of email
function isValidEmail(email) {
    const emailRegex = /^abc([._,+-][a-zA-Z0-9]+)?@bridgelabz\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
    return emailRegex.test(email);
}

//Checking multiple cases
console.log(isValidEmail("abc@bridgelabz.co")); 
console.log(isValidEmail("abc123@bridgelabz.co")); 
console.log(isValidEmail("abc-xyz@bridgelabz.co.us")); 
console.log(isValidEmail("abc+lmnop11@bridgelabz.co.in")); 
console.log(isValidEmail("abc@xyz.co.in")); 
