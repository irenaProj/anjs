// Write a JavaScript function that reverse a number
function reverseNumber(e) {
    if (e.keyCode === 13) {
        var input = document.getElementById("input");
        var num = parseInt(input.value);

        if (num) {
            num = "" + num;
            num = num.split("").reverse().join("");

            document.getElementById("output").innerHTML = num;
        }
    }
}

document.getElementById("input").addEventListener("keypress", reverseNumber);
