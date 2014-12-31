angular.module("qa")
    .controller("quizReviewController", function($scope, quiz) {
        $scope.quizData = quiz.getTickets();

        $scope.level = function() {
            var levels = ["Easy", "Intermediate","Advanced"];
            var levelNum = 0;
            var level = "Easy";

            for (var i = 0; i < $scope.quizData.length; i++) {
                var ticketLevel = levels.indexOf($scope.quizData[i].level);

                if (ticketLevel >= 0 && ticketLevel > levelNum) {
                    level = levels[ticketLevel];
                    levelNum = ticketLevel;
                }
            }

            console.log("calculate new level: " + level);
            return level;
        }

        $scope.remove = function(id) {
            quiz.removeTicket(id);
        }
    });