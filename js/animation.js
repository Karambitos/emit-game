"use strict";

$(document).ready(() => {
    // AOS.init();
    setInterval(() => {
        animateDiv();
    }, 1000);
    let text = $('h1.title').text();
    let length = text.length;
    let timeOut;
    let character = 0;
    typeWriter();

    function typeWriter() {
        // console.log('hi');

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

function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 400;
    var w = $(window).width() - 400;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv() {
    // console.log($('.main-target'));
    var newq = makeNewPosition();
    console.log(newq);
    $('.main-target').animate({ top: newq[0], left: newq[1] }, 1000, function () {
        animateDiv();
    });

};