angular.module("qa")
    .controller("qaCtrl", function ($scope, $http) {
        $scope.data = {};

        $http.get("qa-data.json")
            .success(function(data) {
                $scope.data.qa = data;
            })
            .error(function(error) {
                $scope.data.error = error;
                console.log("Error retrieving data: " + error);
            });
    });