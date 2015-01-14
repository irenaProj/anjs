// Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050
// - See more at: http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php#sthash.ht6YtU4Z.dpuf
document.getElementById("submitBtn").addEventListener("click", outputYears);

function outputYears(){
    var start = parseInt(document.getElementById("startYear").value);
    var end = parseInt(document.getElementById("endYear").value);
    var outputElem = document.getElementById("outputYears");

    if (start && end) {
        var outputData = new String();

        for (var i = start; i <= end; i++){
            var date = new Date(i, 0, 1); // Set date to the 1st January of a year

            console.log(date.getDay());

            if( date.getDay() == "0") {
                outputData += i + "<br />";
            }
        }
        outputElem.innerHTML = outputData;
    } 
    else {
        outputElem.innerHTML = "";
    }

}

