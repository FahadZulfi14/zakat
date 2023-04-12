

function zakat() {
    var goldAmount = parseFloat(document.getElementById("Gold").value);
    var silverAmount = parseFloat(document.getElementById("Silver").value);


    var sum = goldAmount + silverAmount;
    var totalZakat = ((goldAmount / 100) * 2.5) + ((silverAmount / 100) * 2.5);


    document.getElementById("total").innerHTML = "Total Amount: Rs " + sum;
    document.getElementById("result").innerHTML = "Your Payable Zakat is: Rs " + totalZakat.toFixed(2);

}


function Reset() {
    var goldAmount = parseFloat(document.getElementById("Gold").value = null);
    var silverAmount = parseFloat(document.getElementById("Silver").value = null);
}