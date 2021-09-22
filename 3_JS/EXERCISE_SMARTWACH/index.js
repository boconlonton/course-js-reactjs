var btnList = ['red', 'black', 'blue', 'pink', 'purple'];
var colorList = ['#ca3d22', '#23211f', '#565681', '#e9c7be', '#8a5362'];

var colorSelectionList = document.getElementById("select-color");
var exampleImage = document.getElementById("img-example");
var btnHeartRate = document.getElementById("heart-rate");
var btnWatch = document.getElementById("watch");

var timer = setInterval(function (){
    var date = new Date(Date.now());
    content.innerHTML = date.toString();
}, 1000)

for (i=0; i<btnList.length; i++){
    var newButton = document.createElement('button');
    newButton.style.backgroundColor = colorList[i];
    newButton.id = btnList[i];
    newButton.className = 'btn';
    newButton.addEventListener('click', function(e){
        source = 'assets/' + e.target.id + '.png'
        console.log(source);
        exampleImage.src = source;
    });
    colorSelectionList.appendChild(newButton);
}

btnWatch.addEventListener("click", function(){
    var content = document.getElementById("content");
    content.innerHTML = timer;
})
btnHeartRate.addEventListener("click", function(){
    var content = document.getElementById("content");
    content.innerHTML = '78';
    clearInterval(timer);
});
