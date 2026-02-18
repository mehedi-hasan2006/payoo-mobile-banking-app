document.getElementById("cashout-btn").addEventListener("click", function () {
  let agentNumber = getValueFromInput("agent-number");
  let cashoutAmount = getValueFromInput("cashout-amount");
  let cashoutPin = getValueFromInput("cashout-pin");

  let balance = currentBalance();
 
  let newBalance = balance - Number(cashoutAmount);

  if(agentNumber.length != 11){
    alert("Invalid Agent Number");
    return;
  }

  if(newBalance <0){
    alert("Insufficient Fund");
    return;
  }

  if(cashoutPin === '1234'){
    alert("Cashout Successfull!")
    let presentBalance = setBalance(newBalance);


    let history = document.getElementById("history-container")
    let createHistoryElement = document.createElement("div");
    createHistoryElement.innerHTML = ` <div class= "bg-white  my-5 border-base-300 rounded-[24px] border p-4 pt-3 pb-3 shadow-md">
         Cashout ${cashoutAmount} TK Successful AC ${agentNumber} at ${new Date()}
    </div>
    `

    history.appendChild(createHistoryElement);
  }

});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   let agentNumber = document.getElementById("agent-number").value;
//   let cashoutAmount = document.getElementById("cashout-amount").value;
//   let cashoutPin = document.getElementById("cashout-pin").value;
//   let balance = document.getElementById("currrent-balance");
//   let currentBalance = balance.innerText;

//   let newBalance = Number(currentBalance - cashoutAmount);

//   if (agentNumber.length != 11) {
//     alert("Invalid agent number");
//     return;
//   }

//   if (newBalance < 0) {
//     alert("Insufficient Fund");
//     return;
//   }

//   if (cashoutPin === "1234") {
//     balance.innerText = newBalance;
//     alert("Cash Out Success!")
//   } else {
//     alert("Invalid pin");
//   }
// });
