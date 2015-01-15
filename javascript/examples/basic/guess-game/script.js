// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number.  

document.getElementById("guessValue").addEventListener("keypress", checkGuess);
document.getElementById("minValue").addEventListener("keypress", changeHiddenNum);
document.getElementById("maxValue").addEventListener("keypress", changeHiddenNum);

var hiddenNum;

function selectHiddenNum() {
    var min = parseInt(document.getElementById("minValue").value);
    var max = parseInt(document.getElementById("maxValue").value);
    var num = Math.ceil(Math.random() * (max - min)) + min;

    console.log("The hidden number is: " + num);

    hiddenNum = num;
}

function changeHiddenNum(e){
    if(e.keyCode === 13) {
        selectHiddenNum();

        var guessElem = document.getElementById("guessValue");
        guessElem.value = "";
    }
}

function checkGuess(e){
    if(e.keyCode === 13) {
        var guessElem = document.getElementById("guessValue");
        var guess = parseInt(guessElem.value);
        var elem = document.getElementById("output");

        if (guess) {
            if (guess == hiddenNum) {
                elem.innerHTML = "Correct, you got it!";
            }
            else if (guess < hiddenNum) {
                elem.innerHTML = "No, go higher...";
                guessElem.value = "";
            }
            else {
                elem.innerHTML = "No. go lower...";
                guessElem.value = "";
            }               
        }
    }
}

window.onload = selectHiddenNum;

