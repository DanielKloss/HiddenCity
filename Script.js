'use strict';

angular.module('hiddenCity', [])

.controller('controller', [function () {
    var self = this;

    self.clues = [
        {
            number: 1,
            image: "images/1.jpg",
            question: "How ready are you?",
            answers: ["1", "2", "3"]
        },
        {
            number: 2,
            image: "images/2.jpg",
            question: "What is your name?",
            answers: ["4", "5", "6"]
        }
    ];

    self.hints = [
        {
            number: 1,
            hint: "The answer is 1, 2 or 3",
        },
        {
            number: 2,
            hint: "The answer is 4, 5 or 6",
        }
    ];

    self.hasStarted = false;
    self.isCorrect = false;
    self.hintGiven = false;

    self.currentClueIndex = 0;
    self.currentClue = self.clues[self.currentClueIndex];
    self.currentHint;
    self.theAnswer = "";

    self.GetHint = function () {
        self.currentHint = self.hints[self.currentClueIndex];
        self.hintGiven = true;
    };

    self.SubmitAnswer = function () {
        self.hasStarted = true;
        self.isCorrect = false;

        angular.forEach(self.clues[self.currentClueIndex].answers, function (value, key) {
            if (value == self.theAnswer) {
                self.currentClueIndex++;
                self.currentClue = self.clues[self.currentClueIndex];
                self.isCorrect = true;
                self.hintGiven = false;
            }
        });
    };
}]);