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
            } else if (Test.test == 1.1) {
                // Load test 1
                console.log('Loading test 1.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 1.2;
            } else if (Test.testLevel == 1.2) {
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
            } else if (test == 2.0) {
                // Initialise test 2 description
            }
        },

        // Initialises a test
        "initTest": function(test) {
            if (test == 1.1) {
                // Initialise test 1
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

    document.getElementById('nextpage').addEventListener("click", Test.clickFunction); 

    // Return public functions
    return {
        "reset": function(test) {
            Test.reset(test);
        }
    };
})();