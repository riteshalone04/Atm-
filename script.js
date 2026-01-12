const correctPin = 2006;
const deposit = 150000;

function login() {
    let pin = document.getElementById("pin").value;

    if (pin == correctPin) {
        alert("Successful Login");
        document.getElementById("atmMenu").classList.remove("hidden");
    } else {
        alert("Invalid PIN");
    }
}

function calculate() {
    let saving = parseInt(document.getElementById("saving").value);
    let balance = saving + deposit;

    document.getElementById("result").innerHTML =
        "Deposit Amount: ₹" + deposit +
        "<br>Total Balance: ₹" + balance;
}
