angular.module("qa")
    .controller("qaCtrl", function ($scope, $http, $firebase) {
        $scope.data = {};

        var ref = new Firebase("https://amber-heat-6599.firebaseio.com/qa");
        $scope.data.qa = $firebase(ref).$asArray();

        $scope.addTicket = function () {
            var newTicket = $scope.data.newTicket;

            if (!newTicket.question) {
                return;
            }

            newTicket.id = $scope.data.qa.length + 1;

            $scope.data.qa.$add(newTicket)
                .then(function(ref) {
                    console.log("Added new question with id " + ref.key());
                }, function(error) {
                    console.log("Error:", error);
                });

            $scope.data.newTicket = '';
        };

    });