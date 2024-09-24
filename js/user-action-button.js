document.getElementById('add-money-btn').addEventListener('click', function (event) {
    
    event.preventDefault();
    const addAmount = document.getElementById('add-amount').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(addAmount, pinNumber);
})