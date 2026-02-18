document.getElementById("cashout-btn").addEventListener("click", function () {
  let agentNumber = document.getElementById("agent-number").value;
  let cashoutAmount = document.getElementById("cashout-amount").value;
  let cashoutPin = document.getElementById("cashout-pin").value;
  let balance = document.getElementById("currrent-balance");
  let currentBalance = balance.innerText;

  let newBalance = Number(currentBalance - cashoutAmount);

  if (agentNumber.length != 11) {
    alert("Invalid agent number");
    return;
  }

  if (newBalance < 0) {
    alert("Insufficient Fund");
    return;
  }

  if (cashoutPin === "1234") {
    balance.innerText = newBalance;
    alert("Cash Out Success!")
  } else {
    alert("Invalid pin");
  }
});
