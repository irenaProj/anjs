//Write a JavaScript program to rotate the string in right 
// direction by periodically removing one letter from the 
// end of the string and attaching it to the front. 
// - See more at: http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php
window.onload = function rotateStringRight() {
    var elem = document.getElementById("rotateStr");
    var textNode = elem.childNodes[0];
    var str = textNode.data;

    setInterval(function() {
        var lastChar = str.charAt(str.length - 1);
        var shortStr = str.substr(0, str.length - 1);
        str = lastChar + shortStr;

        textNode.data = str;
    }, 100);

};
