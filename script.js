"use strict"

import { text_source } from "./public/resource.js";

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const originTextContainer = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const btnValue = document.getElementById("badge_value");

const alertGuide = document.querySelector("#alert_guidline");
const alertSuccess = document.querySelector("#alert_success");

// ============================= needs work//
console.log(text_source);
// ============================= needs work//

// Tooltips Initialization
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


// variable for holding the running state of timer 
var timerRunning;
// variable holds setInterval function
var my_interval = false;
// array to hold timer number indices
let timer = [0, 0, 0, 0, ];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (timer <= 9) {
        time = `0 ${time}`;
    }
    timer;

}

// flash border function
function flashTimer() {
    theTimer.classList.toggle('hide2');
    originTextContainer.classList.add('green_border')
}

function showAlertSuccess() {
    alertSuccess.classList.remove("hide");
    alertSuccess.classList.add("fadeInDown")
}

function showAlertGuide() {
    return alertGuide.classList.remove("hide");
}

function removeAlertSuccess() {
    alertSuccess.classList.add("hide");
}

function removeAlertGuide() {
    return alertGuide.classList.add("hide");
}



// Run a standard minute/second/hundredths timer:
function runTimer() {

    let currentTimer = `${timer[0]}:${timer[1]}:${timer[2]}`;

    theTimer.innerHTML = currentTimer;

    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0, textEntered.length);

    if (textEntered == originText) {
        let flashInterval = setInterval(flashTimer, 200);

        showAlertSuccess();
        confetti.start();
        confetti.maxCount = 100;


        theTimer.classList.add('green');
        theTimer.style.cssText = "color: #FFFFFF"
        originTextContainer.classList.toggle('matched');


        setTimeout(() => {
            clearInterval(flashInterval);
            flashInterval = null;
        }, 1000);


        clearInterval(my_interval)
        testWrapper.style.borderColor = "#008000";

    } else if (textEntered == originTextMatch) {
        testWrapper.style.borderColor = "#65CCf3";

    } else {
        testWrapper.style.borderLeftColor = "#f32424";
        testWrapper.style.borderRightColor = "#f32424";
        testWrapper.style.transition = ".4s";
    }
}

// Start the timer:
function start() {
    let text_entered_length = testArea.value.length;

    if (text_entered_length === 0 && !timerRunning) {
        timerRunning = true;
        my_interval = setInterval(runTimer, 10);

    }
    console.log(text_entered_length);
    btnValue.innerText = (text_entered_length) + 1
}


// Reset everything:
function reset() {
    clearInterval(my_interval);
    my_interval = null;

    removeAlertSuccess();
    confetti.stop();

    timer = [0, 0, 0, 0, ];
    timerRunning = false;

    resetButton.classList.remove('green_border');

    testArea.value = '';
    theTimer.innerHTML = '00:00:00';
    btnValue.innerText = ''

    theTimer.style.cssText = ""
    theTimer.classList.remove('green');
    theTimer.style.cssText = "color: none"

    testWrapper.style.cssText = 'border: 7px solid grey; display: flex; justify-content: center; align-items: center; text-align: center;';
    originTextContainer.classList.remove('green_border')


}



// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", function() {
    reset();
}, false);