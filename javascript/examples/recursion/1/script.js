// Write a JavaScript function to output all substrings and subsequences of a string
var substrings = [];
var subsequences = [];

function getAllSubstrings(str) {
    while (substrings.length) {
        substrings.pop();
    }

    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++ ) {
            substrings.push(str.substring(i, j));
        }
    }
}

function getAllSubsequences(str) {
    while (subsequences.length) {
        subsequences.pop();
    }

    if (str.length == 0) {
        subsequences.push("");
    }
    else {
        getAllSubsequences(str.substring(1));

        var copy = subsequences;
        var len = copy.length;

        for (var i = 0; i < len; i++) {
            subsequences.push(str[0] + subsequences[i]);
        }
    }

}

function calculate(e) {
    if (e.keyCode === 13) {
        var str = document.getElementById("input").value;
        var outputSubstringsElem = document.getElementById("outputSubstrings");
        var outputSubstringsStr = "";
        var outputSubsequencesElem = document.getElementById("outputSubsequences");
        var outputSubsequencesStr = "";
        var len;

        if (str) {
            getAllSubstrings(str);
            len = substrings.length;

            for (var i = 0; i < len; i++ ){
                outputSubstringsStr += (i + 1) + ". " + substrings[i] + "<br/>";
            }
            outputSubstringsElem.innerHTML = outputSubstringsStr;

            getAllSubsequences(str);
            len = subsequences.length;

            for (var i = 0; i < len; i++ ){
                if (subsequences[i] == "") {
                    outputSubsequencesStr += (i + 1) + ". " + "empty string" + "<br/>";
                }
                else {
                    outputSubsequencesStr += (i + 1) + ". " + subsequences[i] + "<br/>";
                }
            }
            
            outputSubsequencesElem.innerHTML = outputSubsequencesStr;

        }
    }
}

document.getElementById("input").addEventListener("keypress", calculate);
