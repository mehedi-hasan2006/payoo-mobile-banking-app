document
  .getElementById("send-money-btn")
  .addEventListener("click", function () {
    let sendMoneyNumber = getValueFromInput("send-money-number");
    let sendMoneyAmount = getValueFromInput("send-money-amount");
    let sendMoneyPin = getValueFromInput("send-money-pin");

    if (sendMoneyNumber.length != 11) {
      alert("Enter Valid Number");
      return;
    }

    let getBalance = currentBalance();
    let balance = getBalance - sendMoneyAmount;

    if (balance < 0) {
      alert("Invalid Amount");
      return;
    }

    if (sendMoneyPin === "1234") {
      let newBalance = setBalance(balance);
      alert(`Tk ${sendMoneyAmount} Transfer Successful`);

      let history = document.getElementById("history-container");
      let createHistoryElement = document.createElement("div");
      createHistoryElement.innerHTML = ` <div class= "bg-white  my-5 border-base-300 rounded-[24px] border p-4 pt-3 pb-3 shadow-md">
        Send Money Successful TK ${sendMoneyAmount} To ACC ${sendMoneyNumber} at ${new Date()}
    </div>
    `;

      history.appendChild(createHistoryElement);
    }
  });
