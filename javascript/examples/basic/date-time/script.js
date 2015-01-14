(function() {
    // Write a JavaScript program to display the current day and time in the following format:
    // Today is : Friday. 
    // Current time is : 4 PM : 50 : 22

    function displayTime(){
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var timeOfDay = ["AM", "PM"];

        var date = new Date();
        var hour = date.getHours();
        var shortHour = (hour % 12);
        var amPm = (hour >= 12) ? timeOfDay[0] : timeOfDay[1];
        var elem = document.getElementById("date-and-time");

        elem.innerHTML = "Today is: " + days[date.getDay() - 1] + ". <br/>" + "Current time is: " + shortHour + amPm + " : " + date.getMinutes() + " : " + date.getSeconds();

    }

    window.setInterval(displayTime, 1000);
})();
