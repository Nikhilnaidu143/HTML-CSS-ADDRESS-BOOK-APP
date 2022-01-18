// -------------------------UC-4-------------------------------
/** Name validation. */
const fullName = document.querySelector("#name");
const nameError = document.querySelector(".text-error");
fullName.addEventListener('input' , function() {
    let nameRegex1 = /^[A-Z]{1}([a-z]){2,}$/;      //First-name validation[1 upper case character followed by lower case characters(must be minimum 3 characters)].
    let nameRegex2 = /^[A-Z]{1}[a-z]{2,}[\s]?[A-Z]{1}[a-z]{2,}$/;  //Full-Name validation[First-name validation and a single space or no space is allowed and repeat first-name validation.].
    if(fullName.value === ""){
        nameError.textContent = " ";
    }
    else if(nameRegex1.test(fullName.value) || nameRegex2.test(fullName.value)){
        nameError.textContent = " ";
    }
    else{
        nameError.textContent = "Invalid Name...!"
    }
});

/** Phone number validation. */
const phoneNumber = document.querySelector(".phoneNum");
const phoneNumError = document.querySelector(".phone-error");
phoneNumber.addEventListener('input' , function() {
    let phoneNumberRegex = /^[0-9 +]{10,13}$/;
    if(phoneNumber.value === ""){
        phoneNumError.textContent = " ";
    }
    else if(phoneNumberRegex.test(phoneNumber.value)){
        phoneNumError.textContent = " ";
    }
    else{
        phoneNumError.textContent = "Invalid Phone Number...!"
    }
});

/** Address validation. */
const address = document.querySelector("#address");
const addressError = document.querySelector(".address-error");
address.addEventListener('input' , function() {
    let addressRegex = /\s*[\w\d]{3,}(?:\s+[\w\d]{3,})*\s*$/;
    if(address.value === ""){
        addressError.textContent = " ";
    }
    else if(addressRegex.test(address.value)){
        addressError.textContent = " ";
    }
    else{
        addressError.textContent = "Invalid address...!";
    }
});

/** Zip Code validation. */
const zipCode = document.querySelector("#zip");
const zipCodeError = document.querySelector(".zip-error");
zipCode.addEventListener('input' , function() {
    let zipCodeRegex = /^[0-9]{3}[\s]?[0-9]{3}$/;
    if(zipCode.value === ""){
        zipCodeError.textContent = " ";
    }
    else if(zipCodeRegex.test(zipCode.value)){
        zipCodeError.textContent = " ";
    }
    else{
        zipCodeError.textContent = "Invalid Zip Code...!"
    }
});
