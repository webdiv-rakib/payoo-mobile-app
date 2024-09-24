// document.getElementById("add-money-btn").addEventListener('click', function (event) {
//     event.preventDefault();
//     console.log("add money button clicked");

//     const inputAmount = document.getElementById("add-amount").value;
//     const inputPin = document.getElementById('pin-number').value;

//     const balance = document.getElementById('available-balance').innerText;
//     console.log(balance);

//     if (inputPin === '12345') {
//         console.log('Added money to your account')
//         const newBalance = inputAmount + balance;
//         console.log(newBalance);
//     }
//     else {
//         alert('Failed');
//     }
// })

document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addAmount = document.getElementById('add-amount').value;
    const pinNumber = document.getElementById('pin-number').value;

    if (pinNumber === '12345') {
        // console.log("adding money to your account");

        // step-4: get the current balance
        const balance = document.getElementById("available-balance").innerText;

        // step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addAmount);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        document.getElementById("available-balance").innerText = newBalance;
    }
    else {
        alert("Failed to add money to your account");
    }

})