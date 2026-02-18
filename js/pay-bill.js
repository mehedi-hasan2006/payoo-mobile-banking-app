document.getElementById("pay-bill-btn").addEventListener("click", function () {
  let payBillAcc = getValueFromInput("select-pay-bill-acc");
  let billerACC = getValueFromInput("biller-acc");
  let billAmount = getValueFromInput("bill-amount");
  let billPin = getValueFromInput("bill-pin");

  if (payBillAcc === "Select Bank") {
    alert("Invalid Acc");
    return;
  }

  if (billerACC.length != 11) {
    alert("Invalid Account Number");
  }

  let balance = currentBalance();
  let newBalance = balance - billAmount;

  if (newBalance < 0) {
    alert("Invalid Amount");
    return
  }

  if (billPin === "1234") {
    presentBalace = setBalance(newBalance);

    alert(`Pay bill ${billAmount} to biller acc ${billerACC} is successful!`);

    let history = document.getElementById("history-container");
    let createHistoryElement = document.createElement("div");
    createHistoryElement.innerHTML = ` <div class= "bg-white  my-5 border-base-300 rounded-[24px] border p-4 pt-3 pb-3 shadow-md">
        Py Bill Successful TK ${billAmount} To ACC ${billerACC} at ${new Date()}
    </div>
    `;

    history.appendChild(createHistoryElement);
  }
});
