angular.module("qa")
    .constant("activeTopicClass", "info")
    .controller("topicListCtrl", function($scope, $filter, activeTopicClass) {
        var selectedTopic= null;

        $scope.ticketsPerPage = 2;
        $scope.selectedPage = 1;
        $scope.pageCnt = Math.ceil($scope.data.qa.length / $scope.ticketsPerPage);

        console.log("Number of pages is " + $scope.pageCnt);

        $scope.selectTopic = function(newTopic) {
            selectedTopic = newTopic;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function(newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.topicFilterFn = function(ticket) {
            return selectedTopic == null || ticket.topic == selectedTopic;
        }

        $scope.getTopicClass = function(topic) {
            return selectedTopic == topic ? activeTopicClass : "";
        }

        $scope.getPageClass = function(page) {
            return $scope.selectedPage == page ? activeTopicClass : "";
        }
    });