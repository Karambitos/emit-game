"use strict";
// import {
//   progressBarObject
// } from './progressBar.js'
// progressBarObject.changeProgressBar()

$(document).ready(() => {
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