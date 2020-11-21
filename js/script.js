"use strict";
$(document).ready(() => {

    // const enterBtn = document.querySelector('.js-enter');
    // const enterSection = document.querySelector('.start');
    // const rightHand = document.querySelector('.right-hand');

    /*
     * Progress BAR
     */
    // const progressPercent = document.querySelector('.progress-percent');
    // const progress = document.querySelector('span.progress');
    // (function () {
    //   let c = 0;
    //   let timeout = setInterval(function () {
    //     c++;
    //     console.dir(progress.offsetHeight);
    //     progressPercent.textContent = progress.offsetHeight + '%'
    //   }, 500);
    // })();

    // enterBtn.addEventListener('click', event => {
    //     enterSection.classList.remove('active');
    // });


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
            console.log(e.currentTarget);

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
            console.log(e.currentTarget);

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

});