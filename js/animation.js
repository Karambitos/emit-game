'use strict';

$(document).ready(() => {
    // AOS.init();
    /*
     * Text animation
     */
    setInterval(() => {
        animateDiv();
    }, 1000);

    typingText();

});

/*
 * Typing animation
 */
function typingText() {
    setTimeout(() => {
        let text = $('.type-letter').text();
        let length = text.length;
        let timeOut;
        let character = 0;
        typeWriter();

        function typeWriter() {
            timeOut = setTimeout(function () {
                character++;
                let type = text.substring(0, character);
                $('.type-letter').text(type);
                $('.type-letter').css("opacity", "1");
                typeWriter();
                if (character == length) {
                    clearTimeout(timeOut);
                }
            }, 100);
        }
    }, 100);
}

/*
 * Slow Typing animation
 */
function title(params) {
    const title = document.querySelector('.animation-title');
    let time = 0;
    let str = ''
    for (let i = 0; i < title.textContent.length; i++) {
        const element = title.textContent[i];
        str += `<span class="letter">${element}</span>`
    }
    title.textContent = ''
    title.insertAdjacentHTML('afterbegin', str)

    function ins(params) {
        setTimeout(() => {
            params.classList.add('letter--show')
        }, time += 100);
    }

    document.querySelectorAll('.letter').forEach(el => {
        ins(el)
    });
}
title()
    
/*
 * Fighter move animation
 */
function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    let h = $('.fight-container--animate-box').height() - 200;
    let w = $('.fight-container--animate-box').width() - 200;
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    return [nh, nw];
}

function animateDiv() {
    let newq = makeNewPosition();
    $('.main-target-animate').animate({
            top: newq[0],
            left: newq[1],
        },
        800,
        function () {
            animateDiv();
        },
    );
    $('.virusLeft').animate({
            top: newq[0],
            left: newq[1],
        },
        600,
        function () {
            animateDiv();
        },
    );
    $('.virusRight').animate({
            top: newq[0],
            left: newq[1],
        },
        700,
        function () {
            animateDiv();
        },
    );
    // $('.big-boss').animate({
    //         top: newq[0],
    //         left: newq[1],
    //     },
    //     1000,
    //     function () {
    //         animateDiv();
    //     },
    // );
}

const moveBoxs = document.querySelectorAll('.move-box');
moveBoxs.forEach((box) => {
    let raf;
    let start = {
        x: 0,
        y: 0,
    };

    function lerp(start, end) {
        // const dx = end.x - start.x;
        const dy = end.y - start.y;

        return {
            // x: start.x + dx * 0.5,
            y: start.y + dy * 0.5,
        };
    };

    box.addEventListener('mousemove', (e) => {
        // console.log(e.currentTarget);

        const end = {
            // x: ((e.clientX / window.innerWidth) - 0.5) * 2,
            y: ((e.clientY / window.innerHeight) - 0.5) * 2
        }
        start = lerp(start, end);
        raf = raf || requestAnimationFrame(update);
    });

    function update() {
        // moveBox.style.setProperty('--x', start.x);
        box.style.setProperty('--y', start.y);
        raf = null;
    }
})

const moveBoxsX = document.querySelectorAll('.move-box--x');
moveBoxsX.forEach((box) => {
    let raf;
    let start = {
        x: 0,
        y: 0,
    };

    function lerp(start, end) {
        const dx = end.x - start.x;
        // const dy = end.y - start.y;

        return {
            x: start.x + dx * 0.5,
            // y: start.y + dy * 0.5,
        };
    };

    box.addEventListener('mousemove', (e) => {
        // console.log(e.currentTarget);

        const end = {
            x: ((e.clientX / window.innerWidth) - 0.5) * 2,
            // y: ((e.clientY / window.innerHeight) - 0.5) * 2
        }
        start = lerp(start, end);
        raf = raf || requestAnimationFrame(update);
    });

    function update() {
        box.style.setProperty('--x', start.x);
        // box.style.setProperty('--y', start.y);
        raf = null;
    }
})


export {
    typingText,
    title
}