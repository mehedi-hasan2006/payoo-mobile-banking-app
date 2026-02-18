document.getElementById("get-bonus-btn").addEventListener("click", function () {
  let couponInput = getValueFromInput("coupon-input");

  let balance = currentBalance();
  let newBalance = balance + 1000;

  if (couponInput.length === 5) {
    let presentBalace = setBalance(newBalance);

    alert(`Congraculations!
            You have recieved 1000 TK from coupon code`);

    let history = document.getElementById("history-container");
    let createHistoryElement = document.createElement("div");
    createHistoryElement.innerHTML = ` <div class= "bg-white  my-5 border-base-300 rounded-[24px] border p-4 pt-3 pb-3 shadow-md">
      You have recieved 1000 TK from coupon code  at ${new Date()}
    </div>
    `;

    history.appendChild(createHistoryElement);
  }
});
