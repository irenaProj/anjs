// Write a JavaScript function that checks whether a passed string is palindrome or not
function checkPalindrome(e) {
    if (e.keyCode === 13) {
        var str = document.getElementById("input").value;
        var middle;

        // Remove spaces
        str = str.split(" ").join("");

        middle = Math.ceil((str.length / 2));

        if (str.length === 1){
            document.getElementById("output").innerHTML = "1 letter string - this is a boring palindrome";
        } 
        else {
            var strHalf1;
            var strHalf2;

            if (str.length % 2 === 0) {
                strHalf1 = str.substr(0, middle);
                strHalf2 = str.substring(middle);
            }
            else {
                strHalf1 = str.substr(0, middle);
                strHalf2 = str.substring(middle - 1);
            }

            // Reverse the second half for comparison
            strHalf2 = strHalf2.split("").reverse().join("");

            if (strHalf1 === strHalf2) {
                document.getElementById("output").innerHTML = "This is a palindrome!!!";
            }
            else {
                document.getElementById("output").innerHTML = "This is not a palindrome...";
            }
        }
    }
}

document.getElementById("input").addEventListener("keypress", checkPalindrome);
