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
  let text = $('.animation-title').text();
  let length = text.length;
  let timeOut;
  let character = 0;
  typeWriter();

  function typeWriter() {
    timeOut = setTimeout(function () {
      character++;
      let type = text.substring(0, character);
      $('.animation-title').text(type);
      typeWriter();

      if (character == length) {
        clearTimeout(timeOut);
      }
    }, 100);
  }
}


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
  $('.main-target').animate({
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
}

export {
  typingText
}