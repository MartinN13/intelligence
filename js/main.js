/*jshint multistr: true */

window.Test = (function() {
    "use strict";

    var Test = {
        "testLevel": 1.0,
        "test1Score": 0,
        "test2Score": 0,
        "test3Score": 0,
        "test4Score": 0,
        "test5Score": 0,

        // Next page button logic
        "clickFunction": function() {
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
                Test.testLevel = 2.0;
            } else if (Test.testLevel == 2.0) {
                // Load test 2 description
                console.log('Loading test 2 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 2.1;
            } else if (Test.testLevel == 2.1) {
                // Load test 2
                console.log('Loading test 2.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 3.0;
            } else if (Test.testLevel == 3.0) {
                // Load test 3 description.
                console.log('Loading test 3 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 3.1;
            }
        },

        // Checks if the answer is right or wrong, then displays next page button
        "radioClick": function() {
            if (this.id == 'question1.1' || this.id == 'question1.2' || this.id == 'question1.3') {
                if (this.id == 'question1.1') {
                    // show right answer text, disable button 2 and 3, and increase score
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    document.getElementById('question1.1').checked = true;
                    document.getElementById('question1.2').disabled = true;
                    document.getElementById('question1.3').disabled = true;
                    Test.test1Score += 3;
                    score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                           Test.test4Score + Test.test5Score);
                } else {
                    // Show wrong answer text
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                    if (this.id == 'question1.2') {
                        // Disable 1.1 and 1.3
                        document.getElementById('question1.1').disabled = true;
                        document.getElementById('question1.2').checked = true;
                        document.getElementById('question1.3').disabled = true;
                    } else {
                        // Disable 1.1 and 1.2
                        document.getElementById('question1.1').disabled = true;
                        document.getElementById('question1.2').disabled = true;
                        document.getElementById('question1.3').checked = true;
                    }
                }
                // Show next page
                nextpage.style.display = 'inline-block';

            } else if (this.id == 'question2.1' || this.id == 'question2.2' || this.id == 'question2.3') {
                if (this.id == 'question2.1') {
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    document.getElementById('question2.1').checked = true;
                    document.getElementById('question2.2').disabled = true;
                    document.getElementById('question2.3').disabled = true;
                    Test.test1Score += 3;
                    score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                           Test.test4Score + Test.test5Score);
                } else {
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                    if (this.id == 'question2.2') {
                        document.getElementById('question2.1').disabled = true;
                        document.getElementById('question2.2').checked = true;
                        document.getElementById('question2.3').disabled = true;
                    } else {
                        document.getElementById('question2.1').disabled = true;
                        document.getElementById('question2.2').disabled = true;
                        document.getElementById('question2.3').checked = true;
                    }
                }
                nextpage.style.display = 'inline-block';

            } else if (this.id == 'question3.1' || this.id == 'question3.2' || this.id == 'question3.3') {
                if (this.id == 'question3.3') {
                    content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                    document.getElementById('question3.1').disabled = true;
                    document.getElementById('question3.2').disabled = true;
                    document.getElementById('question3.3').checked = true;
                    Test.test1Score += 3;
                    score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                           Test.test4Score + Test.test5Score);
                } else {
                    content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
                    if (this.id == 'question3.2') {
                        document.getElementById('question3.1').disabled = true;
                        document.getElementById('question3.2').checked = true;
                        document.getElementById('question3.3').disabled = true;
                    } else {
                        document.getElementById('question3.1').checked = true;
                        document.getElementById('question3.2').disabled = true;
                        document.getElementById('question3.3').disabled = true;
                    }
                }
                nextpage.style.display = 'inline-block';
            }
        },

        // Handles button logic in test 2
        "buttonClick": function() {
            if (this.id == 'button4') {
                content.innerHTML += "<h2 id='right'>You were right!<br>+3 points!</h2>";
                Test.test2Score += 3;
                score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                       Test.test4Score + Test.test5Score);
            } else if (this.id == 'button2' || this.id == 'button3' || this.id == 'button4') {
                content.innerHTML += "<h2 id='wrong'>You were wrong!</h2>";
            }
            nextpage.style.display = 'inline-block';
        },

        // Initiates a test description
        "initTestDesc": function(test) {
            if (test == 1.0) {
                // Initialise test 1 description
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Test 1 involves answering 3 questions.</p> \
                    <p>You will be given three choices for each question.</p> \
                    <p>You only have one try per question, and each correct answer gives you 3 points.</p>';
            } else if (test == 2.0) {
                // Initialise test 2 description
                    content.innerHTML = 
                    '<h2>Test 2</h2> \
                    <p>Test 2 is a game of Fizz Buzz.</p> \
                    <p>Fizz Buzz is a game where every number divisible by 3 is replaced by the word "Fizz",</p> \
                    <p>every number divisible by 5 is replaced by the word "Buzz", and if divisible by 3 AND 5</p> \
                    <p>the number is replaced by the word "Fizz Buzz". \
                    <p><br>You will be shown a sequence and your goal is to choose the correct button to continue the sequence.</p> \
                    <p>You only have one try, and this test gives you 3 points.</p>';
            } else if (test == 3.0) {
                content.innerHTML = 
                    '<h2>Test 3</h2> \
                    <p>Test 3 is a memory test.</p> \
                    <p>You will be shown 9 flags which will be hidden after 5 seconds.</p> \
                    <p>Your goal is to click the correct flags in the order presented to you.</p>';
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
                nextpage.style.display = 'none';
                content.innerHTML = 
                    '<h2>Test 2</h2> \
                    <p>"1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, ..."</p> \
                    <div class="buttons"> \
                        <button type="button" class="btn" id="button1">15</button> \
                        <button type="button" class="btn" id="button2">Fizz</button> \
                        <button type="button" class="btn" id="button3">Buzz</button> \
                        <button type="button" class="btn" id="button4">Fizz Buzz</button> \
                    </div>';

                // Add click event handler for buttons
                document.getElementById('button1').addEventListener("click", Test.buttonClick);
                document.getElementById('button2').addEventListener("click", Test.buttonClick);
                document.getElementById('button3').addEventListener("click", Test.buttonClick);
                document.getElementById('button4').addEventListener("click", Test.buttonClick);
            } else if (test == 3.1) {
                // Initialise test 3
                nextpage.style.display = 'none';
                
                // Create 9 divs in a 3x3 matrix
                // Randomize their id from 1 to 9
                // Apply a img file depending on each id
                // Create a list from 1 to 9 and set requestedFlag to the current list item
                // I.e. item 1 in the list is 'Sweden', requestedFlag = 1
                // Add click event handlers for each
                // The click event should check if this.id == requestedFlag
                // If correct add a point, make the list item green, and highlight the next item, and requestedFlag++
                // If wrong, make red, remove flags, show a big text, You clicked wrong!
            }
        },

        // Restarts a test
        "reset": function() {
            if (Test.testLevel == 1.1 || Test.testLevel == 1.2 || Test.testLevel == 1.3 || Test.testLevel == 2.0) {
                // Remove score from test 1 and re-initialise it
                console.log('Reseting test 1.');
                Test.test1Score = 0;
                Test.testLevel = 1.0;
                Test.clickFunction();
            } else if (Test.testLevel == 2.1 || Test.testLevel == 3.0) {
                // Remove score from test 1 and re-initialise it
                console.log('Reseting test 2.');
                Test.test2Score = 0;
                Test.testLevel = 2.0;
                Test.clickFunction();
            }
            // Make next page link visible and reload score
            nextpage.style.display = 'inline-block';
            score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                       Test.test4Score + Test.test5Score);
        }
    };

    // Define id helpers
    var score = document.getElementById('score');
    var content = document.getElementById('content');
    var nextpage = document.getElementById('nextpage');

    // Add click-event to next page link
    nextpage.addEventListener("click", Test.clickFunction);

    // Set score to 0 at start
    score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                           Test.test4Score + Test.test5Score);

    // Return public functions
    return {
        "reset": function() {
            Test.reset();
        }
    };
})();