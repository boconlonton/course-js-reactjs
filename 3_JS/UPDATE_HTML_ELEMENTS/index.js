var countdownElement = document.getElementById('countdown');

var initialCountdonwVal = countdownElement.innerHTML;

setInterval(function() {
    initialCountdonwVal > 0 ? initialCountdonwVal -= 1 : 0;
    countdownElement.innerHTML = initialCountdonwVal;
}, 1000)
