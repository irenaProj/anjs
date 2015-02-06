function func(e) {
    if (e.keyCode === 13) {
        var str = document.getElementById("input").value;
        var outputElem = document.getElementById("output");
        var re = /[^xo]/g;
        var check = str.replace(re, "");

        if (check !== str) {
            outputElem.innerHTML = "Invalid string contains characters other than 'x' and 'o'";
        } 
        else {
            var re = /[^x]/g;
            var oStr = str.replace(re, "");

            re = /[^o]/g;
            var xStr = str.replace(re, "");

            if (oStr.length == xStr.length) {
                outputElem.innerHTML = "true";
            }
            else {
                outputElem.innerHTML = "false";
            }
        }
        
        // if (str.search(re) != -1) {
        //     outputElem.innerHTML = "true";
        // } 
        // else {
        //     outputElem.innerHTML = "false";
        // }        
    }
}

document.getElementById("input").addEventListener("keypress", func);
