"use strict"

import { text_source } from "./public/resource.js";

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const text_main_container = document.querySelector('.hand_container')

const heading = document.querySelector('#head_text');
const heading_icon = document.querySelector('.fas');
const contentConctainer = document.querySelector('#content_container');
const errorText = document.querySelector('#err');
const remove_error = document.querySelector('#error_icon');


const originTextContainer = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const btnValue = document.getElementById("badge_value");
const giveMeText = document.querySelector(".hand");

const autoGuidePopUp = document.getElementById('btn_modal');
const guideParagraphs = document.querySelectorAll('[id=p1]');

const alertSuccess = document.querySelector("#alert_success");

// Tooltips Initialization
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

// fade in header  after page loads

$(window).on('load', function() {
    heading.classList.remove('hide')
    heading_icon.classList.remove('hide');
    heading.classList.add('fadeIn');
    heading_icon.classList.add('pulse');
    heading_icon.classList.add('slower');
    heading_icon.classList.add('infinite')
    testWrapper.classList.add('slower');
    originText.classList.add('fadeIn');
    originText.classList.add('slower');
    text_main_container.classList.add('fadeIn');
    text_main_container.classList.add('slower');
    testWrapper.style.cssText = 'border: .4rem solid #967070;';
    showGuide()
});

function showGuide() {
    console.log('loaded successfully');
    autoGuidePopUp.click();

    guideParagraphs.forEach(element => {
        element.classList.add('fadeInDown');
        element.style.cssText = "border-left: .4rem solid rgb(150, 112, 112); border-right: .4rem solid rgb(150, 112, 112); box-shadow: 2px 2px 9px rgb(0,0,0,.6); border-radius: .3rem; transition: .2s;"
    });
}


// create text generator hander 
function createText() {
    let result = Object.values(text_source);
    let textIndex = Math.floor(Math.random() * 101);
    return result[textIndex]
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

// variable for holding the running state of timer 
var timerRunning;
// variable holds setInterval function
var my_interval = false;
// array to hold timer number indices
let timer = [0, 0, 0, 0, ];
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// e ===============error function=================
function runOnPasteError() {
    contentConctainer.classList.add('hide');
    errorText.classList.remove('hide2');
}

// =================remove Error==================
function clearError() {
    errorText.classList.add('hide2');
    contentConctainer.classList.remove('hide');
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
            clearInterval(flashInterval);
            flashInterval = null;
        }, 1000);


        clearInterval(my_interval)
        testWrapper.style.borderColor = "#008000";

    } else if (textEntered == originTextMatch) {
        testWrapper.style.borderColor = "#65CCf3";
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
    btnValue.innerText = (text_entered_length) + 1
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

giveMeText.addEventListener('click', () => {
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
}, true);
resetButton.addEventListener("click", function() { reset(); }, false);