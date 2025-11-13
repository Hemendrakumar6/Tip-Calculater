let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let totalAmount = document.getElementById("totalAmount");
let tipAmount = document.getElementById("tipAmount");
let errorMessage = document.getElementById("errorMessage");

function calculateButton(){
    let billAmountValue = billAmount.value;
    let percentageTipValue = percentageTip.value;
    if(billAmountValue === ""){
        errorMessage.textContent = "Please Enter a Valid Input.";
        errorMessage.style.color = "red";
    }

    else if (percentageTipValue === ""){
        errorMessage.textContent = "Please Enter a Valid Input.";
        errorMessage.style.color = "red";
    }

    else{
    
       errorMessage.textContent = "";
       let percentageTipValueElement = parseInt(billAmountValue);
       let billAmountTipValueElement = parseInt(percentageTipValue);

        let calculateTip = (percentageTipValueElement / 100) * billAmountTipValueElement;
        tipAmount.value = calculateTip;

        let totalAmountValue = percentageTipValueElement + calculateTip;
        totalAmount.value = totalAmountValue;

    }
}