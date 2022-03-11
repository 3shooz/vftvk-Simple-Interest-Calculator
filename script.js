
function compute()
{
    // variables for rate, years, amount
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years)
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%\</mark><br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    
    // Alert for non positive number
    if(principal <= 0){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
    }
     
    if(principal == ""){
      alert("Enter a positive number");
      document.getElementById("principal").focus();
      return false;
 }
}

//rate as a slider
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}



