'use strict'
import { heading, spinnerIcon, autoGuidePopUp, guideParagraphs, heading_icon, testWrapper, originText, text_main_container, } from "../anchors.js";

// fade in header  after page loads
function preloads() {
    $(window).on('load', function() {
        let error = window.onerror;
        if (error !== null) return console.error('Resources could not be loaded successfully');

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
        // automatice guide popup
        showGuide()
            //Spinner funtionality//
        $(spinnerIcon).fadeOut("slow");;
        console.log('All resources loaded successfully');

    });
};

function showGuide() {
    setTimeout(() => {
        autoGuidePopUp.click();
    }, 5000)
    guideParagraphs.forEach(element => {
        element.classList.add('fadeInDown');
        element.style.cssText = "border-left: .4rem solid rgb(150, 112, 112); border-right: .4rem solid rgb(150, 112, 112); box-shadow: 2px 2px 9px rgb(0,0,0,.6); border-radius: .3rem; transition: .2s;"
    });
}
export { preloads };