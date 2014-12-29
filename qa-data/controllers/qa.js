angular.module("qa")
.controller("qaCtrl", function ($scope) {
        $scope.data = {
            qa: [
                { question: "q1", answer: "a1", code: "c1", topic: "t1", level: "l1" },
                { question: "q2", answer: "a2", code: "c2", topic: "t2", level: "l2" },
                { question: "q3", answer: "a3", code: "c3", topic: "t3", level: "l3" },
                { question: "q4", answer: "a4", code: "c4", topic: "t4", level: "l4" },
                { question: "q5", answer: "a5", code: "c5", topic: "t5", level: "l5" },
                { question: "q6", answer: "a6", code: "c6", topic: "t6", level: "l6" }]
        };
    });