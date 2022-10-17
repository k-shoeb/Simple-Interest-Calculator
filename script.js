
function updateRate() /* function for displaying selected interest rate */
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=window.rateVal + "%" ;
}   

function compute()
{
    var Principal = document.getElementById("principal").value;
    var Rate = document.getElementById("rate").value;
    var Years = document.getElementById("years").value;
    var Interest = Principal * Years * Rate / 100;
    var year = new Date().getFullYear()+parseInt(Years);
    
    if (Principal >= 1) {
       document.getElementById("result").innerHTML= "If you Deposit <mark>" + Principal + ",</mark><br>At a interest rate of <mark>" + Rate + 
        "% ,</mark><br> You will recieve an amount of <mark> " + Interest + "</mark>, <br> In the Year <mark> " + year+ ".</mark><br>";  
    }
    /* Alert box for principal amount <= 0 */
    else{  
        alert("Please enter a Positive No.");
        document.getElementById("principal").focus();
    }
}
        
