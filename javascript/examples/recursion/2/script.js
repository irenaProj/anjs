// Write a JavaScript program to get the first n Fibonacci numbers.
var sequence = [];
var outputSequenceStr = ""; 
var maxSeqLen = 30;

function fibonacci(num) {
    var len = sequence.length;
    var nextNum = 0;

    if (len == num) {
        return;
    }

    if (len < 2) {
        nextNum = len;
    }
    else {
        nextNum = sequence[len - 2] + sequence[len - 1];
    }

    sequence.push(nextNum);
    outputSequenceStr += nextNum + " ";

    fibonacci(num);
}

function calculate(e) {
    if (e.keyCode === 13) {
        var num = parseInt(document.getElementById("input").value);
        var outputSequenceElem = document.getElementById("outputSequence");
        
        var len;

        if (isNaN(num)) {            
            outputSequenceElem.innerHTML = "Not an integer, try again";
        }
        else {
            if (num > maxSeqLen || num < 0) {
                outputSequenceElem.innerHTML = "Number is too big, insert number between 0 and " + maxSeqLen;
            }
            else {
                fibonacci(num);
                outputSequenceElem.innerHTML = outputSequenceStr;
            }
        }
    }
}

document.getElementById("input").addEventListener("keypress", calculate);
