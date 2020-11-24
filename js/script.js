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
    /*
     * browser detect
     */
    const BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
            const unsupportedScrean = document.querySelector('.unsupported-box');
            let sections = document.querySelectorAll('section');

            // console.log(`broeser ${this.browser}, version ${this.version}, os ${this.OS}`);

            if ($(window).width() < 1025) {
                openUnsupportedPopUp();
            } else {
                closeUnsupportedPopUp();
            }

            if (
                this.browser === ('Chrome') && this.version >= 87 ||
                this.browser === ('Safari') && this.version >= 14 ||
                this.browser === ('Firefox') && this.version >= 82) return;

            openUnsupportedPopUp();
            closeUnsupportedPopUp();
            /*
             * IF browser is wrong
             * hide all sections and show 
             * div with unsupported massege
             */
            function openUnsupportedPopUp() {
                sections.forEach((section) => {
                    section.classList.add('unsupported-browser');
                });
                unsupportedScrean.classList.add('unsupported-browser');
            }

            function closeUnsupportedPopUp() {
                sections.forEach((section) => {
                    section.classList.remove('unsupported-browser');
                });
                unsupportedScrean.classList.remove('unsupported-browser');
            }

        },
        searchString: function (data) {
            for (let i = 0; i < data.length; i++) {
                let dataString = data[i].string;
                let dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
                } else if (dataProp) return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            let index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };

    BrowserDetect.init();
    $(window).resize(function () {
        BrowserDetect.init();
    });
});