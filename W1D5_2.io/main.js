let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let billAmount = document.getElementById('bill_amount').value;
    let tipPercentage = document.getElementById('tip_percentage').value;
   
    let tipAmount = document.getElementById('tip_amount').value = billAmount * tipPercentage/100;
    document.getElementById('total_bill').value = parseFloat(billAmount) + parseFloat(tipAmount);

})