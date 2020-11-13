const error_body = document.body;
const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p");
const text_main_container = document.querySelector('.hand_container')
const heading = document.querySelector('#head_text');
const heading_icon = document.querySelector('.fas');
const contentConctainer = document.querySelector('#content_container');
const errorText = document.querySelector('#err');
const remove_error = document.querySelector('#error_icon');
const arror_err = document.getElementById("arrow_icon");
const spinnerIcon = document.getElementById('spinner');
const reults_btn = document.getElementById('result_btn_1');
const originTextContainer = document.querySelector("#origin-text");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const btnValue = document.getElementById("badge_value");
const giveMeText = document.querySelector(".hand");
const autoGuidePopUp = document.getElementById('btn_modal');
const guideParagraphs = document.querySelectorAll('[id=p1]');
const alertSuccess = document.querySelector("#alert_success");

export {
    testWrapper,
    testArea,
    originText,
    text_main_container,
    heading,
    heading_icon,
    contentConctainer,
    errorText,
    remove_error,
    arror_err,
    spinnerIcon,
    reults_btn,
    error_body,
    alertSuccess,
    guideParagraphs,
    autoGuidePopUp,
    giveMeText,
    btnValue,
    theTimer,
    resetButton,
    originTextContainer,
}