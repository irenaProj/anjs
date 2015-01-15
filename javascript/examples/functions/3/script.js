// Write a JavaScript function which returns the n rows by n columns identity matrix.
function createIdentityMat(e) {
    if (e.keyCode === 13) {
        var num = parseInt(document.getElementById("input").value);
        var outputStr= "";

        if (num > 0) {
            if (num > 10) {
                outputStr = "Matrix size is too big to print, please insert number smaller than 11";
            } 
            else {
                var mat = new Array(num);

                for (var i = 0; i < num; i++) {
                    mat[i] = new Array(num);
                }

                for (var i = 0; i < num; i++) {
                    for (var j = 0; j < num; j++) {
                        if (i == j) {
                            mat[i][j] = 1;
                            outputStr += "1 ";
                        }
                        else {
                            mat[i][j] = 0;
                            outputStr += "0 ";
                        }
                    }

                    outputStr += "<br />";
                }
            }

            document.getElementById("output").innerHTML = outputStr;
        }
    }
}

document.getElementById("input").addEventListener("keypress", createIdentityMat);
