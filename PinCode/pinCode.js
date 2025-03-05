//Create class for pin code
class Pincode{
    constructor(pinCode){
        //Validate pincode
        if(!this.validatePincode(pinCode)){
            throw "Invalid pincode";
        }
        this.pinCode = pinCode;
    }
    //Validate pincode
    validatePincode(pinCode){
        return (/^[1-9][0-9]{5}$/).test(pinCode);
        }
    
    
}

try{
    let pinCode1 = new Pincode("400088");
    console.log("Valid PIN ");
    console.log(pinCode1);

    let pinCode2 = new Pincode("400088B");
    console.log(pinCode2);

}catch(e){
    console.log(e);
    }

