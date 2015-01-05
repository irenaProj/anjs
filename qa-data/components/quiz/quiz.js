angular.module("quiz", ["ngCookies"])
    .factory("quiz", function($cookieStore) {
        var quizData = [];

        return {
            addTicket: function(id, question, level) {
                var itemExists = false;

                for (var i = 0; i < quizData.length; i++) {
                    if (quizData[i].id == id) {
                        itemExists = true;

                        break;
                    }
                }

                if (!itemExists) {
                    quizData.push({
                        id: id, level: level, question: question
                    });
                }
            },

            removeTicket: function(id) {
                for (var i = 0; i < quizData.length; i++) {
                    if (quizData[i].id == id) {
                        quizData.splice(i, 1);

                        break;
                    }
                }
            },

            getTickets: function() {
                return quizData;
            },

            saveQuiz: function() {
                // Put cookie
                $cookieStore.put('savedQuiz', quizData);
            },

            loadQuiz: function() {
                // Get cookie
                var storedQuiz = $cookieStore.get("savedQuiz");

                if (storedQuiz) {
                    quizData = storedQuiz;
                }
            },

            clearQuiz: function() {
                while(quizData.length > 0) {
                    quizData.pop();
                }

                // Store an empty quiz to overwire what might otherwise be stored
                $cookieStore.put('savedQuiz', quizData);
            }
        }
    })
    .directive("quizSummary", function(quiz) {
        return {
            restrict: "E",
            templateUrl: "components/quiz/quizSummary.html",
            controller: function($scope) {
                var quizData = quiz.getTickets();

                $scope.level = function() {
                    var levels = ["Easy", "Intermediate","Advanced"];
                    var levelNum = 0;
                    var level = "Easy";

                    for (var i = 0; i < quizData.length; i++) {
                        var ticketLevel = levels.indexOf(quizData[i].level);

                        if (ticketLevel >= 0 && ticketLevel > levelNum) {
                            level = levels[ticketLevel];
                            levelNum = ticketLevel;
                        }
                    }

                    return level;
                }

                $scope.itemCount = function() {
                    return quizData.length;
                }
            }
        };
    });