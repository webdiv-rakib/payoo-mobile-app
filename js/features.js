// show the cash out form
document.getElementById("show-cash-out").addEventListener('click', function () {
    console.log("show cash out form");
    // show cash out button clicked
    document.getElementById("cash-out-form").classList.remove('hidden');

    // hide the add money form
    document.getElementById("cash-add-form").classList.add('hidden');

})

document.getElementById("show-add-cash").addEventListener('click', function () {
    console.log("show cash add form");
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById('cash-add-form').classList.remove('hidden');
})