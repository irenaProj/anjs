angular.module("qa")
    .constant("activeTopicClass", "info")
    .controller("topicListCtrl", function($scope, $filter, activeTopicClass, quiz) {
        var selectedTopic= null;

        $scope.ticketsPerPage = 10;
        $scope.selectedPage = 1;
        $scope.pageCnt = $scope.data.qa ? Math.ceil($scope.data.qa.length / $scope.ticketsPerPage) : 2;

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

        $scope.addToQuiz = function(ticket) {
            quiz.addTicket(ticket.id, ticket.question, ticket.level);
        }
    });