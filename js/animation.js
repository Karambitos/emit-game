'use strict';

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
  }

  function makeNewPosition() {
    // Get viewport dimensions (remove the dimension of the div)
    let h = $('.fight-container--animate-box').height() - 200;
    let w = $('.fight-container--animate-box').width() - 200;
    let nh = Math.floor(Math.random() * h);
    let nw = Math.floor(Math.random() * w);
    return [nh, nw];
  }

  function animateDiv() {
    // console.log($('.main-target'));
    let newq = makeNewPosition();
    // console.log(newq);
    $('.main-target').animate(
      {
        top: newq[0],
        left: newq[1],
      },
      800,
      function () {
        animateDiv();
      },
    );
  }
});
