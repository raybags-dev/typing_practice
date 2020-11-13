"use strict"
import { text_source } from "../public/js/resource.js";
import { preloads } from "../public/js/middleware/preloads.js";
import {
    testWrapper,
    testArea,
    originText,
    contentConctainer,
    errorText,
    remove_error,
    arror_err,
    reults_btn,
    error_body,
    alertSuccess,
    giveMeText,
    btnValue,
    theTimer,
    resetButton,
    originTextContainer,
} from "../public/js/anchors.js"


// variable for holding the running state of timer 
var timerRunning;
// variable holds setInterval function
var my_interval = false;
// array to hold timer number indices
let timer = [0, 0, 0, 0, ];
// Add leading zero to numbers 9 or below (purely for aesthetics):

// Tooltips Initialization
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// ------------------------------
preloads()
    // ------------------------------

function deliverTextToTextArea() {
    if (timerRunning) {
        testArea.classList.add('flash')
        testArea.classList.toggle('red_border');
        setTimeout(() => {
            testArea.classList.add('flash')
            testArea.classList.toggle('red_border');
        }, 100);
        return
    }
    let x = state.renderText();
    paragragh_text = x;
}
// Pull out results function//
function result() {
    reults_btn.click();
}

// create text generator hander 
function createText() {
    let result = Object.values(text_source);
    let textIndex = Math.floor(Math.random() * 101);
    return result[textIndex]
}

// e ===============error function=================
function runOnPasteError() {
    errorText.style.cssText = "background: rgb(70, 51, 51);";
    contentConctainer.classList.add('hide');
    errorText.classList.remove('hide2');
    errorText.classList.add('bounceIn');
    arror_err.classList.remove('zoomOutRight');
    remove_error.classList.remove('zoomOut')
}
// =================remove Error==================
function clearError() {
    errorText.style.cssText = "box-shadow: 1px 1px 10px 1000px rgb(0, 0, 0, .4); transition: .2s";
    errorText.classList.add('hide2');
    contentConctainer.classList.remove('hide');
    arror_err.classList.add('zoomOutRight');
    remove_error.classList.add('zoomOut');
    errorText.classList.remove('bounceIn');

}

function flashErrorBoxOnBodyClick() {
    let isOn = errorText.classList.contains('bounceIn');
    (isOn) ? errorText.classList.remove('bounceIn'):
        errorText.classList.add('bounceIn');
}

// flash border function
function flashTimer() {
    theTimer.classList.toggle('.green');
    originTextContainer.classList.add('green_border');
}

function showAlertSuccess() {
    alertSuccess.classList.remove('slideOutUp');
    alertSuccess.classList.remove("hide");
    alertSuccess.classList.add("fadeInDown")
}

function removeAlertSuccess() {
    alertSuccess.classList.add("hide");
}
// populate  "P" element  class
class Text {
    constructor(text) {
        this.text = text
    }
    renderText = function() {
        return originText.innerHTML = createText();

    }
}

const state = new Text();
let text_result = state.renderText();
let paragragh_text = document.querySelector("#origin-text p").textContent = text_result;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    // let currentTimer = `${timer[0]}:${timer[1]}:${timer[2]}`;
    let currentTimer = `${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
    theTimer.innerHTML = currentTimer;
    timer[3]++;
    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = paragragh_text.substring(0, textEntered.length);

    if (textEntered == paragragh_text) {
        let flashInterval = setInterval(flashTimer, 200);

        showAlertSuccess();
        confetti.start(2000, 50);

        theTimer.classList.add('green');
        theTimer.classList.add('flash')
        theTimer.style.cssText = "color: #FFFFFF"
        originTextContainer.classList.toggle('matched');

        setTimeout(() => {
            result();
            clearInterval(flashInterval);
            flashInterval = null;
        }, 1000);


        clearInterval(my_interval)
        testWrapper.style.borderColor = "#008000";

    } else if (textEntered == originTextMatch) {
        testWrapper.style.borderColor = "#008000";
        theTimer.style.cssText = "color: #FFFFFF"

    } else {
        testWrapper.style.borderLeftColor = "#f32424";
        testWrapper.style.borderRightColor = "#f32424";
        theTimer.style.cssText = "color: #750d0d"
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
    btnValue.innerText = leadingZero((text_entered_length + 1));
}


// Reset everything:
function reset() {
    clearInterval(my_interval);
    my_interval = null;

    setTimeout(() => {
        removeAlertSuccess();

    }, 2000)
    alertSuccess.classList.add('slideOutUp');
    confetti.stop();

    timer = [0, 0, 0, 0, ];
    timerRunning = false;

    resetButton.classList.remove('green_border');
    resetButton.classList.add('green_border');


    testArea.value = '';
    theTimer.classList.remove('flash')
    theTimer.innerHTML = '00:00:00';
    btnValue.innerText = '';

    theTimer.style.cssText = "";
    theTimer.classList.remove('green');

    testWrapper.style.cssText = 'border: 7px solid  #967070; display: flex; justify-content: center; align-items: center; text-align: center;';
    originTextContainer.classList.remove('green_border');
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, true);
testArea.addEventListener("keyup", spellCheck, true);
testArea.addEventListener('paste', runOnPasteError, false);
remove_error.addEventListener('click', clearError, false);
error_body.addEventListener('click', flashErrorBoxOnBodyClick, false);
resetButton.addEventListener("click", reset, false);
giveMeText.addEventListener('click', deliverTextToTextArea, true);