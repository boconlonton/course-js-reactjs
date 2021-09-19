var countdownElement = document.getElementById('countdown');

var initialCountdonwVal = countdownElement.innerHTML;

var interval = setInterval(function() {
    initialCountdonwVal > 0 ? initialCountdonwVal -= 1 : 0;
    countdownElement.innerHTML = initialCountdonwVal;
    countdownElement.style.fontSize = initialCountdonwVal * 100 + "px";
    console.log(initialCountdonwVal * 100 + "px");
    if (initialCountdonwVal <= 0){
        clearInterval(interval);
    };
}, 1000)
