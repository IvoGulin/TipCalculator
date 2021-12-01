function fun()
{
    var billAmount = document.getElementById("bill-amount").value;
    var tipPercentage = document.getElementById("tip-percentage").value;
	
	document.getElementById("tip-amount").innerHTML = parseFloat(billAmount * tipPercentage / 100);
	document.getElementById("total-bill").innerHTML = parseFloat(billAmount) + parseFloat(billAmount * tipPercentage / 100);
}

