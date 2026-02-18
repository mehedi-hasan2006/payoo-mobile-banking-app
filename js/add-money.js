document.getElementById("add-money-btn").addEventListener("click", function () {
  let bankName = getValueFromInput("add-money-bank-name");
  let accNo = getValueFromInput("add-bankacc");
  let addAmount = Number(getValueFromInput("add-amount"));
  let addMoneyPin = getValueFromInput("add-money-pin");

  if(bankName === "Select Bank" ){
    alert("Select Bank Name");
    return
  }

  if (accNo.length != 11) {
    alert("Invalid Bank Account Number");
    return;
  }

  if (addMoneyPin === "1234") {
    alert(`From ${bankName.toUpperCase()} Add Money ${addAmount} TK Successful From AC ${accNo} at ${new Date()}`);

    let getBalance = currentBalance();
    let addBalance = getBalance + addAmount;
    let presentBalance = setBalance(addBalance);

    let history = document.getElementById("history-container")
    let createHistoryElement = document.createElement("div");
    createHistoryElement.innerHTML = ` <div class= "bg-white  my-5 border-base-300 rounded-[24px] border p-4 pt-3 pb-3 shadow-md">
        From ${bankName.toUpperCase()} Add Money ${addAmount} TK Successful From AC ${accNo} at ${new Date()}
    </div>
    `

    history.appendChild(createHistoryElement);
  }
});
