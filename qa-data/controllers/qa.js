angular.module("qa")
    .controller("qaCtrl", function ($scope, $http, $location, $firebase, quiz) {
        $scope.data = {};

        // Read tickes from backend data
        var ref = new Firebase("https://amber-heat-6599.firebaseio.com/qa");
        $scope.data.qa = $firebase(ref).$asArray();

        // Define topics and levels
        $scope.topicsArr = ["AngularJS", "CSS", "General", "HTML", "Java", "JavaScript", "jQuery"];        
        $scope.levelsArr = ["Easy", "Intermediate", "Advanced"];

        // Load quiz from cookies
        quiz.loadQuiz();

        $scope.addTicket = function () {
            var newTicket = $scope.data.newTicket;

            if (!newTicket.question) {
                return;
            }

            newTicket.id = $scope.data.qa.length + 1;

            $scope.data.qa.$add(newTicket)
                .then(function(ref) {
                    console.log("Added new question with id " + ref.key());
                    $location.path("/qaAdmin");
                }, function(error) {
                    console.log("Error:", error);
                });

            $scope.data.newTicket = '';
        };

        $scope.removeTicket = function(item) {
            $scope.data.qa.$remove(item).
                then(function(ref) {
                    console.log("Removed item with id: " + ref.key()); 
                }, function(error) {
                    console.log("Error:", error);
                });
        }

        $scope.editTicket = function(item) {
            $scope.data.qa.$save(item).
                then(function(ref) {
                    console.log("Changed item with id: " + ref.key()); 
                }, function(error) {
                    console.log("Error:", error);
                });
        }

        $scope.isAdminActive = ($location.path() == "/qaAdmin") ? true : false;
        $scope.setTicketsMgmtActive = function(isActive) {
            $scope.isAdminActive = isActive;
        }

    });