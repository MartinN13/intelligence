/*jshint multistr: true */

window.Test = (function() {
    "use strict";

    var Test = {
        "testLevel": 1.0,

        "answers": [
                "1",
                "1",
                "2"
        ],

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
                     <p>Test 1 involves babla.</p> \
                     <p>You have to blabla.</p>';
            } else if (test == 2.0) {
                // Initialise test 2 description
            }
        },

        // Initialises a test
        "initTest": function(test) {
            if (test == 1.1) {
                // Initialise test 1
                nextpage.style.display = 'none';
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Question 1:</p> \
                    <p>"I like turtles"</p> \
                    <p><br>1. Yes, I do.</p> \
                    <p>X. No, I do not.</p> \
                    <p>2. I hate turtles.</p> \
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

                // Add click event handlers for radio buttons, check if (clicked?), output Wrong! or Right!
            } else if (test == 1.2) {
                nextpage.style.display = 'none';
                content.innerHTML =
                    '<h2>Test 1</h2> \
                    <p>Question 2:</p> \
                    <p>"I like cows"</p> \
                    <p><br>1. Yes, I do.</p> \
                    <p>X. No, I do not.</p> \
                    <p>2. I hate turtles.</p> \
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
            } else if (test == 1.3) {
                nextpage.style.display = 'none';
                content.innerHTML = 
                    '<h2>Test 1</h2> \
                    <p>Question 3:</p> \
                    <p>"I like apples"</p> \
                    <p><br>1. Yes, I do.</p> \
                    <p>X. No, I do not.</p> \
                    <p>2. I hate turtles.</p> \
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

    var content = document.getElementById('content');
    var nextpage = document.getElementById('nextpage');
    nextpage.addEventListener("click", Test.clickFunction); 

    // Return public functions
    return {
        "reset": function(test) {
            Test.reset(test);
        }
    };
})();