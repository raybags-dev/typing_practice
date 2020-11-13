"use strict"
// Preloads import
import { preloads } from "../public/js/middleware/preloads.js";
// helper functions import
import { tool_tip, spellCheck, start, reset, deliverTextToTextArea, clearError, removeAlertSuccess, result, showAlertSuccess, flashTimer, flashErrorBoxOnBodyClick, runOnPasteError } from "../public/js/middleware/helpers.js";
// Dependant anchors import
import { testArea, remove_error, error_body, giveMeText, resetButton } from "../public/js/anchors.js"

// Preloads events function
preloads()
    // Tooltips Initialization
tool_tip
// ----------------impplimentation
clearError,
removeAlertSuccess,
result, showAlertSuccess,
flashTimer,
flashErrorBoxOnBodyClick,
runOnPasteError

spellCheck()
start()
reset()

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, true);
testArea.addEventListener("keyup", spellCheck, true);
testArea.addEventListener('paste', runOnPasteError, false);
remove_error.addEventListener('click', clearError, false);
error_body.addEventListener('click', flashErrorBoxOnBodyClick, false);
resetButton.addEventListener("click", reset, false);
giveMeText.addEventListener('click', deliverTextToTextArea, true);