import { progressBarObject } from './progressBar.js';

let firstFigter = {
  url: './images/tramp.png',
  alt: 'Figter Trump',
};
let bonusFigter = {
  url: './images/virus.png',
  alt: 'Figter virus',
};
const hitEffect = {
  url: './images/baaam.png',
  alt: 'Hit effect',
};
const bonusHitEffect = {
  url: './images/bonus.png',
  alt: 'Hit effect',
};
const roundWin = {
  url: './images/win.png',
  alt: 'Win',
};

setTimeout(function () {
  addElement();
}, 1200);
roundNumberHide();

const progressLine = document.querySelector('span.progress');
const toMove = {
  count: 0,
  hand: true,
  hitPersent: 12,
  bonusPersent: 60,
  round: 1,

  toChooseHand(e) {
    if (this.hand) {
      this.hand = false;
      this.toMoveRightHand(e);
    } else {
      this.hand = true;
      this.toMoveLeftHand(e);
      //delete virus
      //   if (!e.currentTarget.classList.contains("main-target")) {
      //     console.dir(e.currentTarget.remove());
      //   }
    }
  },

  toMoveRightHand(e) {
    let rightHand = document.querySelector('.right-hand');
    const rightEffect = document.querySelector('.right-hand--effect');
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
    let leftHand = document.querySelector('.left-hand');
    const leftEffect = document.querySelector('.left-hand--effect');
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

  calcPercent(lvl = false) {
    let rightHand = document.querySelector('.right-hand');
    let leftHand = document.querySelector('.left-hand');
    let progress = document.querySelector('.progress-percent');
    const targetBg = document.querySelector('.main-target');
    const slotImageBox = document.querySelector('.slot--image');
    const roundNumber = document.querySelector('.round-card');
    const roundImage = roundNumber.querySelector('img');

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
      removeAllFighters();
      roundImage.src = `${roundWin.url}`;
      roundNumber.classList.add('active');
      progress.textContent = ``;
      setTimeout(function () {
        roundNumber.classList.remove('active');
        addElement();
        document.querySelector('.mainTarget').classList.add('stars-added');
        leftHand.style.opacity = '0';
        rightHand.style.opacity = '0';
        let arrovNext = document.querySelector('.start--arrow-next');
        arrovNext.classList.add('active');
        arrovNext.addEventListener('click', toTheNextRound);
      }, 1000);
    }
  },
};
/*
 * Go to the next round
 */
function toTheNextRound() {
  progressBarObject.changeProgressBar();
  toMove.count = 0;
  toMove.round += 1;
  toMove.calcPercent(2);
  firstFigter.url = `./images/main-target${toMove.round}.jpg`;
  firstFigter.alt = 'target2';
  let enemy = document.querySelector('.progress-enemy>img');
  enemy.setAttribute('src', `./images/main-target${toMove.round}.jpg`);
  let slotEnemyActive = document.querySelectorAll('.slot--image>img');

  if (slotEnemyActive[toMove.round - 1]) {
    slotEnemyActive[toMove.round - 1].setAttribute(
      'src',
      `./images/main-target${toMove.round}.jpg`,
    );
  }

  let slotenemy = document.querySelectorAll('.slot--image');
  slotenemy[toMove.round - 2].classList.add('active');
  document.querySelector('.mainTarget').remove('stars-added');
  let arrovNext = document.querySelector('.start--arrow-next');
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
  const roundPict = document.querySelector('.round-card> img');
  const roundPictDiv = document.querySelector('.round-card');

  roundPict.setAttribute('src', `./images/round_${toMove.round}.png`);
  roundPictDiv.classList.add('active');
  roundNumberHide();
}

/*
 * Hide round Number
 */
function roundNumberHide() {
  setTimeout(function () {
    const roundNumber = document.querySelector('.round-card');
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
  document
    .querySelector('.fight-container--animate-box')
    .insertAdjacentHTML('beforeend', div);

  let allTargets = document.querySelectorAll('.target');

  allTargets.forEach(el =>
    el.addEventListener('click', e => toMove.toChooseHand(e)),
  );
}

function removeAllFighters() {
  const toRemoveFiters = document.querySelectorAll('.fighter');
  toRemoveFiters.forEach(elem => {
    elem.remove(elem);
  });
}
