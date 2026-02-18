// console.log("machine file added")

function getValueFromInput(id){
    let input = document.getElementById(id);
    const value = input.value;
    return value;
}

function currentBalance(){
    let balance = document.getElementById('current-balance');
    let currentBalance = balance.innerText
   

    return Number(currentBalance);
}

function setBalance(value){
    let balance = document.getElementById('current-balance');
    balance.innerText = value;
    // return value;
}


function showOnly(id){

    let addMoney = document.getElementById('add-money');
    let cashout = document.getElementById('cashout');
    let transferMoeny = document.getElementById('transfer-money');
    let getBonus = document.getElementById('get-bonus');
    let payBill = document.getElementById('pay-bill');
    let transaction = document.getElementById('transactions');




    addMoney.classList.add("hidden");
    cashout.classList.add("hidden");
    transferMoeny.classList.add("hidden");
    getBonus.classList.add("hidden");
    payBill.classList.add("hidden");
    transaction.classList.add("hidden");

    let selected = document.getElementById(id);
    selected.classList.remove('hidden');
}