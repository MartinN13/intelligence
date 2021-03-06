/*jshint browser: true */
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
        "timer2": null,

        /**
         * Handles test launching.
         *
         * @this {a element}
         */
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
                // Load test 3 description
                console.log('Loading test 3 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 3.1;
            } else if (Test.testLevel == 3.1) {
                // Load test 3
                console.log('Loading test 3.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 4.0;
            } else if (Test.testLevel == 4.0) {
                // Load test 4 description
                console.log('Loading test 4 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 4.1;
            } else if (Test.testLevel == 4.1) {
                // Load test 4
                console.log('Loading test 4.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 5.0;
            } else if (Test.testLevel == 5.0) {
                // Load test 5 description
                console.log('Loading test 5 description.');
                Test.initTestDesc(Test.testLevel);
                Test.testLevel = 5.1;
            } else if (Test.testLevel == 5.1) {
                // Load test 5
                console.log('Loading test 5.');
                Test.initTest(Test.testLevel);
                Test.testLevel = 6.0;
            } else if (Test.testLevel == 6.0) {
                // Load results page
                console.log('Loading results.');
                Test.initTestDesc(Test.testLevel);
            }
        },

        /**
         * Checks if a radio button is correct or not.
         *
         * @this {radio button}
         */
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
                    content.innerHTML += "<h2 id='wrong'>You were wrong!<br>0 points!</h2>";
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
                    content.innerHTML += "<h2 id='wrong'>You were wrong!<br>0 points!</h2>";
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
                    content.innerHTML += "<h2 id='wrong'>You were wrong!<br>0 points!</h2>";
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

        /**
         * Checks if a button is correct or not.
         *
         * @this {button}
         */
        "buttonClick": function() {
            if (this.id == 'button4') {
                content.innerHTML += "<h2 id='right'><br>You were right!<br>+3 points!</h2>";
                Test.test2Score += 3;
                score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                       Test.test4Score + Test.test5Score);
            } else if (this.id == 'button2' || this.id == 'button3' || this.id == 'button4') {
                content.innerHTML += "<h2 id='wrong'><br>You were wrong!<br>0 points!</h2>";
            }
            nextpage.style.display = 'inline-block';
        },

        /**
         * Draws a test description.
         *
         * @param {number} test The test description that should be drawn.
         */
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
                // Initialise test 3 description
                content.innerHTML = 
                    '<h2>Test 3</h2> \
                    <p>Test 3 is a memory test.</p> \
                    <p>You will be shown 9 flags which will be hidden after 5 seconds.</p> \
                    <p>Your goal is to memorise the flags position and click the correct flags in the order presented to you.</p> \
                    <p>Click on next page to start the test.</p>';
            } else if (test == 4.0) {
                // Initialise test 4 description
                content.innerHTML = 
                    '<h2>Test 4</h2> \
                    <p>Test 4 is a test of your reading comprehension and visual acuity.</p> \
                    <p>10 different objects will be drawn out.</p> \
                    <p>Your goal is to click the correct objects in the order presented to you.</p> \
                    <p>If you click the wrong object you lose 1 point and the test moves on to the next object on the list.</p> \
                    <p><br>You have to finish the test in 15 seconds.</p> \
                    <p>Click on next page to start the test.</p>';
            } else if (test == 5.0) {
                // Initialise test 5 description
                content.innerHTML = 
                    '<h2>Test 5</h2> \
                    <p>Test 5 is another test of your reading comprehension and visual acuity.</p> \
                    <p>10 different objects will be shown for one second, with a one second pause in between.</p> \
                    <p>A correct click gets you 1 point, while a mistake loses you 2 points, so be careful!</p> \
                    <p><br><br>Your goal is to click on any object that:</p> \
                    <p>1. Is not red.</p> \
                    <p>2. Is not a square.</p> \
                    <p>3. Is red and a square.</p> \
                    <p><br><br>Click on next page to start the test.</p>';
            } else if (test == 6.0) {
                // Initialise resluts page
                nextpage.style.display = 'none';
                score.style.display = 'none';
                var result = Math.floor((Test.test1Score + Test.test2Score + Test.test3Score + 
                              Test.test4Score + Test.test5Score) / 36 * 100);
                content.innerHTML = 
                    '<h2>Results</h2> \
                    <p>Congratulations! You have finished the test.</p> \
                    <p><br>Here is your score for each test: </p> \
                    <p>Test 1: ' + Test.test1Score + ' out of 9 points</p> \
                    <p>Test 2: ' + Test.test2Score + ' out of 3 points</p> \
                    <p>Test 3: ' + Test.test3Score + ' out of 9 points</p> \
                    <p>Test 4: ' + Test.test4Score + ' out of 10 points</p> \
                    <p>Test 5: ' + Test.test5Score + ' out of 5 points</p> \
                    <h2><br>Total: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                       Test.test4Score + Test.test5Score) + ' out of 36 points</h2> \
                    <p><br>This gives you a score of ' + result + '%, which means you are:</p>';

                    if ((Test.test1Score + Test.test2Score + Test.test3Score + 
                         Test.test4Score + Test.test5Score) < 5) {
                        content.innerHTML += '<h2>A (little) bit stupid!</h>';
                    } else if ((Test.test1Score + Test.test2Score + Test.test3Score + 
                                Test.test4Score + Test.test5Score) < 10) {
                        content.innerHTML += '<h2>Below average!</h>';
                    } else if ((Test.test1Score + Test.test2Score + Test.test3Score + 
                                Test.test4Score + Test.test5Score) < 20) {
                        content.innerHTML += '<h2>Average!</h>';
                    } else if ((Test.test1Score + Test.test2Score + Test.test3Score + 
                                Test.test4Score + Test.test5Score) < 30) {
                        content.innerHTML += '<h2>Very smart!</h>';
                    } else {
                        content.innerHTML += '<h2>A genius!</h>';
                    }
            }
        },

        /**
         * Initiates a test.
         *
         * @param {number} test The test that should be drawn.
         */
        "initTest": function(test) {
            /**
             * Gives a div element a color, position, and shape.
             *
             * @param {div} element The div that should be modified.
             * @param {number} count Decides which color and shape the div will receive.
             * @param {number} test Distinguishes between which test the function is used for.
             */
            var randomAttributes = function(element, count, test) {
                // Add 'object' class
                element.className += 'object';
                // Define colours and shapes
                var colors = [' green', ' blue', ' red', ' blue', ' green', ' red', ' yellow', ' red', ' blue', ' green'];
                var shapes = [' square', ' circle', ' triangle', ' triangle', ' circle', 
                              ' square', ' square', ' circle', ' square', ' triangle'];
                // Set a shape
                element.className += shapes[count];
                // Set a size
                if (shapes[count] != ' triangle') {
                    element.className += colors[count];
                    element.style.height = '100px';
                    element.style.width = '100px';
                } else {
                    element.style.height = '0px';
                    element.style.width = '0px';
                    element.style.borderColor = 'transparent transparent ' + colors[count];
                }
                // If test 4 set a random position, else a fixed one
                if (test == 4) {
                    var newHeight = Math.floor((Math.random() * 350) + 1),
                        newWidth = Math.floor((Math.random() * 650) + 1);
                
                    element.style.top = newHeight + 'px';
                    element.style.left = newWidth + 'px';
                } else if (test == 5) {
                    element.style.top = '200px';
                    element.style.left = '350px';
                }
            };

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
                content.innerHTML = '<h2>Test 3</h2>';

                // Resize test area to fit all 9 flags and the flag list
                content.style.height = '600px';
                content.style.top = '400px';
                score.style.top = '660px';
                nextpage.style.top = '640px';

                // Shuffle flag numbers
                var shuffle;
                var flagArray = ['flag1', 'flag2', 'flag3', 'flag4', 'flag5', 'flag6', 'flag7', 'flag8', 'flag9'];

                /**
                 * Shuffles an array.
                 *
                 * @param {array} o The array to be shuffled.
                 * @return {array} The shuffled array.
                 */
                shuffle = function(o){ //http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array-in-javascript
                    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                    return o;
                    };
                shuffle(flagArray);

                // Create 9 flag divs in a 3x3 matrix
                for (var i = 0; i < 9; i++) {
                    content.innerHTML += '<div class="' + flagArray[i] + '" id="flag' + (i + 1) + '"></div>';
                }
                
                // Position flags, as we don't know their position before shuffling
                document.getElementById('flag1').style.top = '80px';
                document.getElementById('flag1').style.left = '95px';
                document.getElementById('flag2').style.top = '80px';
                document.getElementById('flag2').style.left = '300px';
                document.getElementById('flag3').style.top = '80px';
                document.getElementById('flag3').style.left = '505px';
                document.getElementById('flag4').style.top = '205px';
                document.getElementById('flag4').style.left = '95px';
                document.getElementById('flag5').style.top = '205px';
                document.getElementById('flag5').style.left = '300px';
                document.getElementById('flag6').style.top = '205px';
                document.getElementById('flag6').style.left = '505px';
                document.getElementById('flag7').style.top = '330px';
                document.getElementById('flag7').style.left = '95px';
                document.getElementById('flag8').style.top = '330px';
                document.getElementById('flag8').style.left = '300px';
                document.getElementById('flag9').style.top = '330px';
                document.getElementById('flag9').style.left = '505px';

                var currentFlag = 1;

                /**
                 * Checks if a flag matches the variable currentFlag.
                 *
                 * @this {div}
                 */
                var flagCheck = function() {
                    if ('flag' + currentFlag == this.className) {
                        // Make flag visible and mark list item green
                        this.style.background = '';
                        document.getElementById('list' + currentFlag).style.fontWeight = '';
                        document.getElementById('list' + currentFlag).style.color = 'green';
                        document.getElementById('list' + currentFlag).innerHTML += ' +1';
                        currentFlag++;

                        Test.test3Score += 1;
                        score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                               Test.test4Score + Test.test5Score);
                        if (currentFlag < 10) {
                            // Make next list item bold
                            document.getElementById('list' + currentFlag).style.fontWeight = 'bold';
                        } else {
                            // If all 9 flags are clicked, add next page link
                            nextpage.style.display = 'inline-block';
                        }
                        // Remove click event from flag
                        this.removeEventListener("click", flagCheck);
                    } else {
                        // Resize content window back into normal and give game over message
                        content.style.height = '';
                        content.style.top = '';
                        score.style.top = '';
                        nextpage.style.top = '';
                        content.innerHTML = '<h2>Test 3</h2> \
                                            <h2 id="wrong">You were wrong!<br>Game over</h2>';
                        if (Test.test3Score == 1) {
                            content.innerHTML += '<h2>You got ' + Test.test3Score + ' flag right!</h2>';
                        } else {
                            content.innerHTML += '<h2>You got ' + Test.test3Score + ' flags right!</h2>';
                        }
                        nextpage.style.display = 'inline-block';
                    }
                };

                setTimeout(function() {
                    // Remove cover and hide flags after 5 seconds
                    document.getElementById('flag1').style.background = 'none';
                    document.getElementById('flag2').style.background = 'none';
                    document.getElementById('flag3').style.background = 'none';
                    document.getElementById('flag4').style.background = 'none';
                    document.getElementById('flag5').style.background = 'none';
                    document.getElementById('flag6').style.background = 'none';
                    document.getElementById('flag7').style.background = 'none';
                    document.getElementById('flag8').style.background = 'none';
                    document.getElementById('flag9').style.background = 'none';

                    // Create a list from flag 1 to 9 and make first entry bold
                    content.innerHTML += '<p id="list1">1. China</p>';
                    content.innerHTML += '<p id="list2">2. Finland</p>';
                    content.innerHTML += '<p id="list3">3. Japan</p>';
                    content.innerHTML += '<p id="list4">4. Norway</p>';
                    content.innerHTML += '<p id="list5">5. Poland</p>';
                    content.innerHTML += '<p id="list6">6. South Korea</p>';
                    content.innerHTML += '<p id="list7">7. Sweden</p>';
                    content.innerHTML += '<p id="list8">8. North Korea</p>';
                    content.innerHTML += '<p id="list9">9. Denmark</p>';
                    document.getElementById('list1').style.fontWeight = 'bold';
                }, 5000);

                setTimeout(function() {
                    // Add event listeners after all flags are white
                    document.getElementById('flag1').addEventListener("click", flagCheck);
                    document.getElementById('flag2').addEventListener("click", flagCheck);
                    document.getElementById('flag3').addEventListener("click", flagCheck);
                    document.getElementById('flag4').addEventListener("click", flagCheck);
                    document.getElementById('flag5').addEventListener("click", flagCheck);
                    document.getElementById('flag6').addEventListener("click", flagCheck);
                    document.getElementById('flag7').addEventListener("click", flagCheck);
                    document.getElementById('flag8').addEventListener("click", flagCheck);
                    document.getElementById('flag9').addEventListener("click", flagCheck);
                }, 5000);
            } else if (test == 4.1) {
                nextpage.style.display = 'none';
                content.innerHTML = '';

                // Resize test area to better fit objects
                content.style.height = '600px';
                content.style.top = '400px';
                score.style.top = '660px';
                nextpage.style.top = '640px';

                var currentObject = 1;

                /**
                 * Checks if an object matches the variable currentObject.
                 *
                 * @this {div}
                 */
                var objectCheck = function() {
                    if ('object' + currentObject == this.id && currentObject < 11) {
                        document.getElementById('list' + currentObject).style.fontWeight = '';
                        document.getElementById('list' + currentObject).style.color = 'green';
                        document.getElementById('list' + currentObject).innerHTML += ' +1';
                        currentObject++;

                        Test.test4Score += 1;
                        score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                               Test.test4Score + Test.test5Score);
                    } else if (currentObject < 11) {
                        document.getElementById('list' + currentObject).style.fontWeight = '';
                        document.getElementById('list' + currentObject).style.color = 'red';
                        document.getElementById('list' + currentObject).innerHTML += ' -1';
                        currentObject++;

                        Test.test4Score -= 1;
                        score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                               Test.test4Score + Test.test5Score);
                    }

                    if (currentObject < 11) {
                        // Make next list item bold
                        document.getElementById('list' + currentObject).style.fontWeight = 'bold';
                    } else {
                        // If all 10 object are clicked, add next page link and remove countdown
                        nextpage.style.display = 'inline-block';
                    }
                };

                // Give each object its attributes
                for (var i2 = 1; i2 < 11; i2++) {
                    content.innerHTML += '<div id="object' + i2 + '"></div>';
                    randomAttributes(document.getElementById('object' + i2), (i2 - 1), 4);
                }

                // Create the list of instructions
                content.innerHTML += '<p id="list1">1. The green square</p>';
                content.innerHTML += '<p id="list2">2. The blue circle</p>';
                content.innerHTML += '<p id="list3">3. The red triangle</p>';
                content.innerHTML += '<p id="list4">4. The blue triangle</p>';
                content.innerHTML += '<p id="list5">5. The green circle</p>';
                content.innerHTML += '<p id="list6">6. The red square</p>';
                content.innerHTML += '<p id="list7">7. The yellow square</p>';
                content.innerHTML += '<p id="list8">8. The red circle</p>';
                content.innerHTML += '<p id="list9">9. The blue square</p>';
                content.innerHTML += '<p id="list10">10. The green triangle</p>';
                document.getElementById('list1').style.fontWeight = 'bold';

                var seconds = 15;
                content.innerHTML += '<p id="timer">' + seconds + '</p>';

                var timer = setInterval(function() {
                    if (currentObject == 11) {
                        clearInterval(timer);
                    } else {
                        seconds--;
    
                        if (seconds < 0) {
                            content.innerHTML = '<h2>Test 4</h2> \
                                                <h2 id="wrong">Time is up!<br>Game over</h2>';
                            if (Test.test4Score == 1) {
                                content.innerHTML += '<h2>You got ' + Test.test4Score + ' object right!</h2>';
                            } else {
                                content.innerHTML += '<h2>You got ' + Test.test4Score + ' objects right!</h2>';
                            }
                            nextpage.style.display = 'inline-block';
                            clearInterval(timer);
                        } else if (seconds < 5) {
                            document.getElementById('timer').style.color = 'red';
                            document.getElementById('timer').innerHTML = seconds;
                        } else {
                            document.getElementById('timer').innerHTML = seconds;
                        }
                    }
                }, 1000);

                document.getElementById('object1').addEventListener("click", objectCheck);
                document.getElementById('object2').addEventListener("click", objectCheck);
                document.getElementById('object3').addEventListener("click", objectCheck);
                document.getElementById('object4').addEventListener("click", objectCheck);
                document.getElementById('object5').addEventListener("click", objectCheck);
                document.getElementById('object6').addEventListener("click", objectCheck);
                document.getElementById('object7').addEventListener("click", objectCheck);
                document.getElementById('object8').addEventListener("click", objectCheck);
                document.getElementById('object9').addEventListener("click", objectCheck);
                document.getElementById('object10').addEventListener("click", objectCheck);
            } else if (test == 5.1) {
                nextpage.style.display = 'none';
                content.innerHTML = '<h2>Test 4</h2> \
                                    <p><br><br>Click on any object that: </p> \
                                    <p>1. Is not red.</p> \
                                    <p>2. Is not a square.</p> \
                                    <p>3. Is red and a square.</p>';
                var counter = 0;
                var objectCount = 1;
                var clickCount = 1;

                /**
                 * Checks if an element's classname contains red, or square, or both.
                 *
                 * @this {div}
                 */
                var objectCheck2 = function() {
                    var wrong;
                    console.log(this.style.borderColor);

                    if ( this.className.match(/(?:^|\s)red(?!\S)/) && this.className.match(/(?:^|\s)square(?!\S)/) ) {
                        wrong = 0;
                    } else if ( this.className.match(/(?:^|\s)red(?!\S)/) || this.className.match(/(?:^|\s)square(?!\S)/) ){
                        wrong = 1;
                    } else if (this.style.borderColor == 'transparent transparent red') {
                        wrong = 1;
                    } else {
                        wrong = 0;
                    }

                    if (wrong === 0) {
                        content.innerHTML += '<p id="list' + clickCount + '">Correct! +1</p>';
                        document.getElementById('list' + clickCount).style.color = 'green';
                        Test.test5Score += 1;
                        score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                               Test.test4Score + Test.test5Score);
                    } else {
                        content.innerHTML += '<p id="list' + clickCount + '">Wrong! -2</p>';
                        document.getElementById('list' + clickCount).style.color = 'red';
                        Test.test5Score -= 2;
                        score.innerHTML = 'Current score: ' + (Test.test1Score + Test.test2Score + Test.test3Score + 
                                                               Test.test4Score + Test.test5Score);
                    }
                    clickCount++;
                };

                // Give each object its attributes
                Test.timer2 = setInterval(function() {
                    if (counter == 20) {
                        content.innerHTML = '<h2 id=>Test 5</h2> \
                                            <h2 id="wrong">Time is up!<br>Game over</h2>';
                        if (Test.test5Score == 1) {
                            content.innerHTML += '<h2>You got ' + Test.test5Score + ' object right!</h2>';
                        } else {
                            content.innerHTML += '<h2>You got ' + Test.test5Score + ' objects right!</h2>';
                        }
                        nextpage.style.display = 'inline-block';
                        clearInterval(Test.timer2);
                    } else if (counter % 2 === 0) {
                        content.innerHTML += '<div id="object' + objectCount + '"></div>';
                        randomAttributes(document.getElementById('object' + objectCount), (objectCount - 1), 5);
                        document.getElementById('object' + objectCount).addEventListener("click", objectCheck2);
                        objectCount++;
                    } else if (counter % 2 !== 0) {
                        content.removeChild(document.getElementById('object' + (objectCount - 1)));
                    }
                    counter++;
                }, 1000);
            }
        },

        /**
         * Redraws a test and resets its score.
         */
        "reset": function() {
            if (Test.testLevel == 1.1 || Test.testLevel == 1.2 || Test.testLevel == 1.3 || Test.testLevel == 2.0) {
                // Remove score from test 1 and re-initialise it
                console.log('Reseting test 1.');
                Test.test1Score = 0;
                Test.testLevel = 1.0;
                Test.clickFunction();
            } else if (Test.testLevel == 2.1 || Test.testLevel == 3.0) {
                // Remove score from test 2 and re-initialise it
                console.log('Reseting test 2.');
                Test.test2Score = 0;
                Test.testLevel = 2.0;
                Test.clickFunction();
            } else if (Test.testLevel == 3.1　|| Test.testLevel == 4.0) {
                // Remove score from test 3 and re-initialise it
                console.log('Reseting test 3.');
                Test.test3Score = 0;
                Test.testLevel = 3.0;
                Test.clickFunction();
            } else if (Test.testLevel == 4.1　|| Test.testLevel == 5.0) {
                // Remove score from test 4 and re-initialise it
                console.log('Reseting test 4.');
                Test.test4Score = 0;
                Test.testLevel = 4.0;
                Test.clickFunction();
            } else if (Test.testLevel == 5.1　|| Test.testLevel == 6.0) {
                // Remove score from test 5 and re-initialise it
                console.log('Reseting test 5.');
                clearInterval(Test.timer2);
                Test.counter = 0;
                Test.test5Score = 0;
                Test.testLevel = 5.0;
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