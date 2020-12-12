let btn = document.getElementById('btn')
btn.addEventListener('click',function () {
    let billAmount = document.getElementById('bill_amount').value;
    let tipPrecent = document.getElementById('tip_procent').value;

    let tipAmount = document.getElementById('tip_amount').value = billAmount / tipPrecent;
    document.getElementById('totall_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

})