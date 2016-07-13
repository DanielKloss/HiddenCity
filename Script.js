'use strict';

angular.module('hiddenCity', [])

.controller('controller', [function () {
    var self = this;

    self.submitted = false;
    self.score = 0;

    self.questions = {
        question1: {
            number: 1,
            image: "images/1.jpg",
            question: "How ready are you?",
            answer1: "Pumped, bring on the adventure!",
            answer2: "I was about to go for a bike ride but I am curious to see where this is going...",
            answer3: "Excited but I hope its not too much effort",
            answer4: "Not going to lie, I'm a little bit scared...",
            answer: "",
            theAnswer: "1"
        },
        question2: {
            number: 2,
            image: "images/2.jpg",
            question: "What is the likelihood that Mark will piss the bed tonight?",
            answer1: "Not at all likely",
            answer2: "Quite Likely",
            answer3: "Very Likely",
            answer4: "Definitely",
            answer: "",
            theAnswer: "4"
        }
    };

    self.submit = function () {
        self.score = 0;
        angular.forEach(self.questions, function (value, key) {
            if (value.answer == value.theAnswer) {
                self.score += 1;
            }
        });
        self.submitted = true;
    };

}]);