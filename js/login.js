// // step1: set event handler
// document.getElementById("login-btn").addEventListener('click', function (event) {
//     // step-2: prevent default behavior (reloading)
//     event.preventDefault(); // <---------- vejal to beginners
//     console.log("Login Button Clicked");
//     // step-3: get the phone number and the pin
//     const phoneNumber = document.getElementById('mobile-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step-4: validate phone and pin
//     // this is temporary, should not do like this
//     if (phoneNumber === '5' && pinNumber === '1234') {
//         console.log("You are logged in");
//         // step-5: allow user to log in
//     }
//     else {
//         alert("Wrong phone number or pin");
//     }
// })
// // search: form submit reloading the page

document.getElementById("login-btn")
    .addEventListener('click', function (event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        console.log(phoneNumber, pinNumber);

        if (phoneNumber === '01794181719' && pinNumber === '12345') {
            console.log("You are Logged In");
            window.location.href = '/home.html';
        }
        else {
            alert("Wrong Phone Number or Pin");
        }
    })