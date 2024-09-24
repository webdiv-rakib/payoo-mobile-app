// Cash Out system

document.getElementById("cash-out-btn").addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById("input-cash-out").value;
    const cashOutPin = document.getElementById("cashout-pin-number").value;

    if (cashOutPin === '12345') {
        const balance = document.getElementById("available-balance").innerText;
        const cashOutNumber = parseFloat(cashOutAmount);
        const availableBalance = parseFloat(balance);

        const afterCashOut = availableBalance - cashOutAmount;
        document.getElementById("available-balance").innerText = afterCashOut;
    }
    else {
        alert("Failed to cash out money from your account");
    }

})