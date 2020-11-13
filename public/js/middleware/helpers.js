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
    originText
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

export { Text, clearError, removeAlertSuccess, result, showAlertSuccess, flashTimer, flashErrorBoxOnBodyClick, runOnPasteError }