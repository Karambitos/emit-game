import {
  bar,
  slotenemy,
  slotEnemyActive,
  enemy,
  progressLine,
  rightHand,
  rightEffect,
  leftHand,
  leftEffect,
  winRoundReffery,
  winRoundRefferyText,
  arrovNext,
  progress,
  roundPict,
  roundNumber,
  animateBox
} from "./refs.js";
import {
  firstFigter,
  bonusFigter,
  hitEffect,
  bonusHitEffect,
  roundWin
} from './images/images.js';

import {
  typingText
} from './animation.js';

setTimeout(function () {
  addElement();
}, 1200);
roundNumberHide();

const toMove = {
  count: 0,
  barMargin: 0,
  hand: true,
  hitPersent: 12,
  bonusPersent: 60,
  round: 1,

  toChooseHand(e) {
    if (this.hand) {
      this.hand = false;
      this.toMoveRightHand(e);
      const target = e.currentTarget;
      target.classList.add('active')
      setTimeout(() => {
        target.classList.remove('active')
      }, 750);
    } else {
      this.hand = true;
      this.toMoveLeftHand(e);
      const target = e.currentTarget;
      target.classList.add('active')
      setTimeout(() => {
        target.classList.remove('active')
      }, 750);
      //delete virus
      //   if (!e.currentTarget.classList.contains("main-target")) {
      //     console.dir(e.currentTarget.remove());
      //   }
    }
  },

  toMoveRightHand(e) {
    /*
     * Change the hit effect
     */
    let target = e.currentTarget;
    if (target.classList.contains('target')) {
      let hitImage = rightEffect.querySelector('img');
      hitImage.src = `${bonusHitEffect.url}`;
      setTimeout(function () {
        hitImage.src = `${hitEffect.url}`;
      }, 200);
    }
    rightHand.style.top = e.clientY + 'px';
    rightHand.style.left = e.clientX + 'px';
    rightEffect.style.opacity = '1';

    this.calcPercent();

    setTimeout(function () {
      rightHand.style.top = '';
      rightHand.style.left = '';
      rightEffect.style.opacity = '';
    }, 200);
  },

  toMoveLeftHand(e) {
    /*
     * Change the hit effect
     */
    let target = e.currentTarget;
    if (target.classList.contains('target')) {
      let hitImage = leftEffect.querySelector('img');
      hitImage.src = `${bonusHitEffect.url}`;
      setTimeout(function () {
        hitImage.src = `${hitEffect.url}`;
      }, 200);
    }

    leftEffect.style.opacity = '1';
    leftHand.style.top = e.clientY + 'px';
    leftHand.style.left = e.clientX - 200 + 'px';
    this.calcPercent();
    setTimeout(function () {
      leftHand.style.top = '';
      leftHand.style.left = '';
      leftEffect.style.opacity = '';
    }, 200);
  },
  removeAllFighters() {
    const toRemoveFiters = document.querySelectorAll('.fighter');
    toRemoveFiters.forEach(elem => {
      elem.remove(elem);
    });
  },
  calcPercent(lvl = false) {
    const targetBg = document.querySelector(".main-target");
    const slotImageBox = document.querySelector(".slot--image");
    const roundNumber = document.querySelector(".round-card");
    const roundPict = roundNumber.querySelector("img");

    /*
     * Next level
     */
    if (lvl) {
      progress.textContent = `${this.count}%`;
      progressLine.style.height = '';
      return;
    }
    /*
     * Adding progressLine height
     */
    if (!progressLine.style.height) {
      progressLine.style.height = `${this.count + this.hitPersent}%`;
    } else if (parseInt(progressLine.style.height) < 100) {
      progressLine.style.height = `${this.count + this.hitPersent}%`;
    }

    /*
     * Adding progressLine TEXT height
     */
    if (this.count + this.hitPersent < 100) {
      progress.textContent = `${(this.count += this.hitPersent)}%`;
      parseInt(progress.textContent);
    } else {
      progress.textContent = `100%`;
      slotImageBox.classList.add('active');
    }

    /*
     * Bonus fiters shows up
     */
    if (
      parseInt(progress.textContent) >= this.bonusPersent &&
      !document.querySelector('.virusRight')
    ) {
      addVirusElement();
      targetBg.classList.add('active');
    }

    /*
     * Win - image shows
     */
    if (parseInt(progress.textContent) >= 100) {
      this.removeAllFighters();
      roundPict.src = `${roundWin.url}`;
      roundNumber.classList.add('active');
      progress.textContent = ``;
      setTimeout(function () {
        roundNumber.classList.remove('active');
        addElement();
        document.querySelector(".mainTarget").classList.add("stars-added");
        leftHand.style.opacity = "0";
        rightHand.style.opacity = "0";
        // let arrovNext = document.querySelector(".start--arrow-next");
        winRoundReffery.classList.add('active');
        setTimeout(function () {
          winRoundRefferyText.classList.add("active");
          typingText();
        }, 1000);
        setTimeout(function () {
          arrovNext.classList.add("active");
        }, 4000);
        arrovNext.addEventListener("click", toTheNextRound);
      }, 2000);
    }
  },
  changeProgressBar() {
    this.barMargin += 50;
    bar.style.marginLeft = this.barMargin + "px";
  },
};
/*
 * Go to the next round
 */
function toTheNextRound() {
  toMove.changeProgressBar();
  toMove.count = 0;
  toMove.round += 1;
  toMove.calcPercent(2);
  firstFigter.url = `./images/main-target${toMove.round}.jpg`;
  firstFigter.alt = 'target2';
  enemy.setAttribute('src', `./images/main-target${toMove.round}.jpg`);
  if (slotEnemyActive[toMove.round - 1]) {
    slotEnemyActive[toMove.round - 1].setAttribute(
      'src',
      `./images/main-target${toMove.round}.jpg`,
    );
  }
  slotenemy[toMove.round - 2].classList.add('active');
  document.querySelector('.mainTarget').remove('stars-added');
  winRoundReffery.classList.remove('active');
  winRoundRefferyText.classList.remove("active");
  arrovNext.classList.remove('active');

  toChangeRoundPict();

  setTimeout(function () {
    let rightHand = document.querySelector('.right-hand');
    let leftHand = document.querySelector('.left-hand');
    leftHand.style.opacity = '1';
    rightHand.style.opacity = '1';

    addElement();
  }, 1000);
}

function toChangeRoundPict() {
  roundPict.setAttribute('src', `./images/round${toMove.round}.svg`);
  roundNumber.classList.add('active');
  roundNumberHide();
}

/*
 * Hide round Number
 */
function roundNumberHide() {
  setTimeout(function () {
    roundNumber.classList.remove('active');
  }, 1500);
}

/*
 * Create main element
 */
function addElement() {
  let div = `<div class='main-target mainTarget fighter'>
                <span class ="star-box"></span>
                <span class="angry-box"></span>
                <span class="angry-box--text"></span>
                <div class="main-target-box">
                  <span class="target-bg"></span>
                  <img src="${firstFigter.url}" alt="${firstFigter.alt}" />
                </div>
              </div>`;
  document
    .querySelector('.fight-container--animate-box')
    .insertAdjacentHTML('beforeend', div);

  let allTargets = document.querySelectorAll('.mainTarget');

  allTargets.forEach(el =>
    el.addEventListener('click', e => toMove.toChooseHand(e)),
  );
}

/*
 * Create virus element
 */
function addVirusElement() {
  let div = `<div class='virusRight target fighter'>
              <img src = "${bonusFigter.url}"
              alt = "${bonusFigter.alt}" / >
            </div>
            <div class = 'virusLeft target fighter' >
              <img src = "${bonusFigter.url}"
              alt = "${bonusFigter.alt}" / >
            </div>`;
  animateBox.insertAdjacentHTML("beforeend", div);

  let allTargets = document.querySelectorAll('.target');

  allTargets.forEach(el =>
    el.addEventListener('click', e => toMove.toChooseHand(e)),
  );
}