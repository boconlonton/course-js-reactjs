var btn = document.getElementById("btn-click");

function onBtnClick() {
    btn.style.backgroundColor = "lightcoral"
    alert("Button Clicked");
}

// btn.onclick = onBtnClick;
btn.addEventListener('click', onBtnClick)