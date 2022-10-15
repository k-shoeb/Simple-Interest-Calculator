
function dispRate() /* function for displaying selected interest rate */
{
    window.Rate = document.getElementById("rate").value; /* "window".Rate to make "Rate" a global variable */
    document.getElementById("rate_val").innerHTML=window.Rate + "%" ;
}   

function compute()
{
    var Principal = document.getElementById("principal").value;
    var Years = document.getElementById("years").value;
    var Interest = Principal * Years * window.Rate / 100;
    var year = new Date().getFullYear()+parseInt(Years);
    
    if (Principal >= 1) {
        document.getElementById("result").innerHTML= "<br>" + "If you Deposit, " + Principal + "<br>" +
        "At a interest rate of \n" + window.Rate + "<br>" +
        "You will recieve anamount of \n" + Interest + "<br>" + "In the Year " + year ;  
    }
    /* Alert box for principal amount <= 0 */
    else{  
        alert("Please enter a Positive No.");
    }
}
        
