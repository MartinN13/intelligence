/*jshint multistr: true */

window.Test = (function() {
    "use strict";

    var Test = {
        "testLevel": 1.0,
        "currentScore": 0,

        // Next page button logic
        "clickFunction": function() {
            Test.clearDiv('content');

            if (Test.testLevel == 1.0) {
                // Load test 1 description
                console.log('Loading test 1 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 1.1;
            } else if (Test.testLevel == 1.1) {
                // Load test 1.1
                console.log('Loading test 1.1.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 1.2;
            } else if (Test.testLevel == 1.2) {
                // Load test 1.2
                console.log('Loading test 1.2.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 1.3;
            } else if (Test.testLevel == 1.3) {
                // Load test 1.3
                console.log('Loading test 1.3.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 1.4;
            } else if (Test.testLevel == 1.4) {
                // Load test 1 results
                console.log('Loading test 1 results.');
                Test.initTestResults(Test.testLevel);
                Test.testLevel = 2.0;
            } else if (Test.testLevel == 2.0) {
                // Load test 2 description
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 2.1;
            } else if (Test.testLevel == 2.1) {
                // Load test 2
                Test.initTest(Test.testLevel);
                Test.testLevel = 2.2;
            } else if (Test.testLevel == 2.2) {
                // Load test 2 results etc.
                Test.initTestResults(Test.testLevel);
                Test.testLevel = 3.0;
            }
        },

        // Checks if the answer is right or wrong, then displays next page button
        "radioClick": function() {
            if (this.id == 'question1.1' || this.id == 'question1.2' || this.id == 'question1.3') {
                // Make it impossible to change choice
                document.getElementById('question1.1').disabled = true;
                document.getElementById('question1.2').disabled = true;
                document.getElementById('question1.3').disabled = true;

                if (this.id == 'question1.1') {
                    // show right answer text and increase score
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    Test.currentScore += 3;
                    score.innerHTML = 'Current score: ' + Test.currentScore;
                } else {
                    // Show wrong answer text
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                }
                // Show next page
                nextpage.style.display = 'inline-block';

            } else if (this.id == 'question2.1' || this.id == 'question2.2' || this.id == 'question2.3') {
                document.getElementById('question2.1').disabled = true;
                document.getElementById('question2.2').disabled = true;
                document.getElementById('question2.3').disabled = true;

                if (this.id == 'question2.1') {
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    Test.currentScore += 3;
                    score.innerHTML = 'Current score: ' + Test.currentScore;
                } else {
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                }
                nextpage.style.display = 'inline-block';

            } else if (this.id == 'question3.1' || this.id == 'question3.2' || this.id == 'question3.3') {
                document.getElementById('question3.1').disabled = true;
                document.getElementById('question3.2').disabled = true;
                document.getElementById('question3.3').disabled = true;

                if (this.id == 'question3.3') {
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    Test.currentScore += 3;
                    score.innerHTML = 'Current score: ' + Test.currentScore;
                } else {
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                }
                nextpage.style.display = 'inline-block';
            }
        },

        // Clears the innerHTML of a div
        "clearDiv": function(element) {
                document.getElementById(element).innerHTML = "";
        },

        // Initiates a test description
        "initTestDesc": function(test) {
            if (test == 1.0) {
                // Initialise test 1 description
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Test 1 involves answering 3 questions.</p> \
                    <p>You will be given three choices for each question.</p> \
                    <p>You only have one try per question, and each correct answer gives you 3 points.';
            } else if (test == 2.0) {
                // Initialise test 2 description
            }
        },

        // Initialises a test
        "initTest": function(test) {
            if (test == 1.1) {
                // Initialise test 1.1
                nextpage.style.display = 'none';
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Question 1:</p> \
                    <p>"What was the name of Dr. Dre\'s first solo album?"</p> \
                    <p><br>1. The Chronic</p> \
                    <p>X. 2001</p> \
                    <p>2. Compton</p> \
                    <div class="checkboxes"> \
                        <div class="checkboxgroup"> \
                            <label for="question1.1">1</label> \
                            <input type="radio" name="radio" id="question1.1" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question1.2">X</label> \
                            <input type="radio" name="radio" id="question1.2" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question1.3">2</label> \
                            <input type="radio" name="radio" id="question1.3" /> \
                        </div> \
                    </div>';

                // Add click event handlers for radio buttons
                document.getElementById('question1.1').addEventListener("click", Test.radioClick);
                document.getElementById('question1.2').addEventListener("click", Test.radioClick);
                document.getElementById('question1.3').addEventListener("click", Test.radioClick);
            } else if (test == 1.2) {
                // Initialise test 1.2
                nextpage.style.display = 'none';
                content.innerHTML =
                    '<h2>Test 1</h2> \
                    <p>Question 2:</p> \
                    <p>"5 + 5 / 5 * 5 - 5 = ?"</p> \
                    <p><br>1. 5</p> \
                    <p>X. 20</p> \
                    <p>2. 25</p> \
                    <div class="checkboxes"> \
                        <div class="checkboxgroup"> \
                            <label for="question2.1">1</label> \
                            <input type="radio" name="radio" id="question2.1" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question2.2">X</label> \
                            <input type="radio" name="radio" id="question2.2" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question2.3">2</label> \
                            <input type="radio" name="radio" id="question2.3" /> \
                        </div> \
                    </div>';

                // Add click event handlers for radio buttons
                document.getElementById('question2.1').addEventListener("click", Test.radioClick);
                document.getElementById('question2.2').addEventListener("click", Test.radioClick);
                document.getElementById('question2.3').addEventListener("click", Test.radioClick);
            } else if (test == 1.3) {
                // Initialise test 1.3
                nextpage.style.display = 'none';
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Question 3:</p> \
                    <p>"Which word is spelled correctly?"</p> \
                    <p><br>1. "definately".</p> \
                    <p>X. "definetly".</p> \
                    <p>2. "definitely".</p> \
                    <div class="checkboxes"> \
                        <div class="checkboxgroup"> \
                            <label for="question3.1">1</label> \
                            <input type="radio" name="radio" id="question3.1" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question3.2">X</label> \
                            <input type="radio" name="radio" id="question3.2" /> \
                        </div> \
                        <div class="checkboxgroup"> \
                            <label for="question3.3">2</label> \
                            <input type="radio" name="radio" id="question3.3" /> \
                        </div> \
                    </div>';

                // Add click event handlers for radio buttons
                document.getElementById('question3.1').addEventListener("click", Test.radioClick);
                document.getElementById('question3.2').addEventListener("click", Test.radioClick);
                document.getElementById('question3.3').addEventListener("click", Test.radioClick);
            } else if (test == 2.1) {
                // Initialise test 2
            }
        },

        // Initialises a test result
        "initTestResults": function(test) {
            if (test == 1.2) {
                // Initialise test 1 results

            } else if (test == 2.2) {
                // Initialise test 2 results
            }
        },

        // Restarts a test
        "reset": function(test) {
            Test.clearDiv('content');

            if (test == 1.1) {
                test = 1.0;
                // Remove score from test 1 and re-initialise it
            } else if (test == 2.1) {
                test = 2.0;
                // Remove score from test 1 and re-initialise it
            }
        }
    };

    // Define id helpers
    var score = document.getElementById('score');
    var content = document.getElementById('content');
    var nextpage = document.getElementById('nextpage');

    // Add click-event to next page link
    nextpage.addEventListener("click", Test.clickFunction);

    // Set score to 0 at start
    score.innerHTML = 'Current score: ' + Test.currentScore;

    // Return public functions
    return {
        "reset": function(test) {
            Test.reset(test);
        }
    };
})();