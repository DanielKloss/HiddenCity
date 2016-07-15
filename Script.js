'use strict';

angular.module('hiddenCity', ['ngCookies'])

.controller('controller', ['$cookies', function ($cookies) {
    var self = this;

    self.CheckIfStarted = function () {
        if (parseInt(self.currentClueIndex) != 0) {
            self.hasStarted = true;
        }
    }

    self.CheckIfFinished = function () {
        if (parseInt(self.currentClueIndex) + 1 == self.clues.length) {
            self.hasFinished = true;
        }
    }

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
    self.enteredClue = false;
    self.isCorrect = false;
    self.hintGiven = false;
    self.hasFinished = false;

    self.currentClueIndex = $cookies.get('currentClueIndex');

    if (self.currentClueIndex == undefined) {
        self.currentClueIndex = 0;
    }

    self.CheckIfFinished();
    self.CheckIfStarted();

    self.currentClue = self.clues[self.currentClueIndex];
    self.currentHint;
    self.theAnswer = "";

    self.Start = function () {
        self.hasStarted = true;
    }

    self.GetHint = function () {
        self.currentHint = self.hints[self.currentClueIndex];
        self.enteredClue = false;
        self.hintGiven = true;
    };

    self.SubmitAnswer = function () {
        self.enteredClue = true;
        self.isCorrect = false;
        self.hintGiven = false;

        angular.forEach(self.clues[self.currentClueIndex].answers, function (value, key) {
            if (value == self.theAnswer) {
                self.currentClueIndex++;
                $cookies.put('currentClueIndex', self.currentClueIndex);
                self.currentClue = self.clues[self.currentClueIndex];
                self.isCorrect = true;
                self.hintGiven = false;

                self.CheckIfFinished();
            }
        });
    };
}]);