angular.module("qa")
    .constant("activeTopicClass", "info")
    .controller("topicListCtrl", function($scope, $filter, activeTopicClass) {
        var selectedTopic= null;

        $scope.selectTopic = function(newTopic) {
            selectedTopic = newTopic;
        }

        $scope.topicFilterFn = function(ticket) {
            return selectedTopic == null || ticket.topic == selectedTopic;
        }

        $scope.getTopicClass = function(topic) {
            return selectedTopic == topic ? activeTopicClass : "";
        }
    });