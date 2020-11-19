import { newStorage } from "./data.js";

import { text_source } from "../resource.js";
import {
    reults_btn,
    alertSuccess,
    originTextContainer,
    theTimer,
    errorText,
    contentConctainer,
    arror_err,
    remove_error,
    originText,
    testWrapper,
    btnValue,
    testArea,
    resetButton,
} from "../anchors.js";

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
//===============error function=================//
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

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}
// Initialize tooltip
const tool_tip = $(function() {
    $('[data-toggle="tooltip"]').tooltip();
});
// ------------------------------------------------------------------------------------------
// variable for holding the running state of timer 
var timerRunning;
// variable holds setInterval function
var my_interval = false;
// array to hold timer number indices
let timer = [0, 0, 0, 0, ];
// Render text to test area function
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
    let characatorCount = btnValue.innerText = leadingZero((text_entered_length + 1));
    return characatorCount
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
export { spellCheck, deliverTextToTextArea, start, reset, tool_tip, clearError, removeAlertSuccess, result, showAlertSuccess, flashTimer, flashErrorBoxOnBodyClick, runOnPasteError }