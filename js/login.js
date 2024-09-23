// step1: set event handler
document.getElementById("login-btn").addEventListener('click', function (event) {
    // step-2: prevent default behavior (reloading)
    event.preventDefault(); // <---------- vejal to beginners
    console.log("Login Button Clicked");
    // step-3: get the phone number
    const phoneNumber = document.getElementById('mobile-number').value;
    console.log(phoneNumber);

    const pinNumber = document.getElementById('pin-number').value;
    console.log(pinNumber);

})

// search: form submit reloading the page