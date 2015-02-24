(function() { 
    var elem = $("#target textarea");
    var num = parseInt(elem.val());
    var newNum = "";

    while(num > 0) {
        var remaining = num % 1000;
        var push = remaining;


        if(newNum == "") {
            newNum = push;
        }
        else {
            if (remaining < num) {
                var temp = remaining;
                
                while (temp < 100) {
                    push = "0" + push;
                    temp *= 10;
                }
            }

            newNum = push + "," + newNum;
        }

        num = (num - remaining) / 1000;
    }

    $(".output").text(newNum);
})();
  