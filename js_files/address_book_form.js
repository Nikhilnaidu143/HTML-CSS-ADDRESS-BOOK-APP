// -------------------------UC-4-------------------------------
/** Name validation. */
const fullName = document.querySelector("#name");
const nameError = document.querySelector(".text-error");
fullName.addEventListener('input' , function() {
    let nameRegex = /^[A-Z]{1}([a-z]){2,}$/;
    if(fullName.value === ""){
        nameError.textContent = " ";
    }
    else if(nameRegex.test(fullName.value)){
        nameError.textContent = " ";
    }
    else{
        nameError.textContent = "Invalid Name..!"
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
        phoneNumError.textContent = "Invalid Phone Number..!"
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
        zipCodeError.textContent = "Invalid Zip Code..!"
    }
});