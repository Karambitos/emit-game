"use strict";

$(document).ready(() => {
    // AOS.init();

    let text = $('h1.title').text();
    let length = text.length;
    let timeOut;
    let character = 0;
    typeWriter();

    function typeWriter() {
        console.log('hi');

        timeOut = setTimeout(function () {
            character++;
            let type = text.substring(0, character);
            $('h1.title').text(type);
            typeWriter();

            if (character == length) {
                clearTimeout(timeOut);
            }
        }, 100);
    };
});