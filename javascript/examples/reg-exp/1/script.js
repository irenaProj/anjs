function ABCheck(e) {
    if (e.keyCode === 13) {
        var str = document.getElementById("input").value;
        var outputElem = document.getElementById("output");
        var re = /a...b/;

        if (str.search(re) != -1) {
            outputElem.innerHTML = "true";
        } 
        else {
            outputElem.innerHTML = "false";
        }        
    }
}

document.getElementById("input").addEventListener("keypress", ABCheck);
