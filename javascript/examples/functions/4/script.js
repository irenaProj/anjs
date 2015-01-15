// Write a JavaScript function to convert an amount to coins.
function calculateCoins(e) {
    if (e.keyCode === 13) {
        var num = parseFloat(document.getElementById("input").value);
        var outputStr= "";
        var coins = [200, 100, 50, 20, 10, 5];

        if (isNaN(num)) {
            document.getElementById("output").innerHTML = "Not a number, cannot process";
        }
        else {
            num *= 100; // Convert to cents

            if (num % coins[coins.length - 1]) {
                document.getElementById("output").innerHTML = "This amount cannot be processed using standard Australian coins";
            }
            else {
                while (num > 0 && coins.length > 0) {
                    if (num >= coins[0]) {
                        num -= coins[0];
                        outputStr += "$"+ (coins[0] / 100) + " ";
                    }
                    else {
                        coins.shift();
                    }
                    
                }


                document.getElementById("output").innerHTML = outputStr;
            }

        }
    }
}

document.getElementById("input").addEventListener("keypress", calculateCoins);


