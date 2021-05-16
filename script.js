function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * rate * years / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // var amount = parseInt(principal) + interest;
    if (principal != "" && principal >= 0) {
        document.getElementById("result").innerHTML = "If you deposit <p id='resultText'>" + principal + "</p>, <br> at an interest rate of <p id='resultText'>" + rate + "%</p>. <br> You will recieve an interest of <p id='resultText'>" + interest + "</p>, <br> in the year <p id='resultText'>" + year + "</p>";
    } else {
        alert("Please fill a correct Principal amount to compute the interest!");
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}