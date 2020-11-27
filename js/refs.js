const bar = document.querySelector('.bar');
const progressLine = document.querySelector("span.progress");
const rightHand = document.querySelector(".right-hand");
const rightEffect = document.querySelector(".right-hand--effect");
const leftHand = document.querySelector(".left-hand");
const leftEffect = document.querySelector(".left-hand--effect");
const winRoundReferee = document.querySelector('.referee-win');
const winRoundRefereeText = winRoundReferee.querySelector('.referee-win--text');
const arrovNext = document.querySelector(".start--arrow-next");
const progress = document.querySelector(".progress-percent");
const targetBg = document.querySelector(".main-target");
const slotImageBox = document.querySelector(".slot--image");
const roundNumber = document.querySelector(".round-card");
const roundPict = document.querySelector(".round-card> img");
const fightContainer = document.querySelector(".fight-container");
const animateBox = document.querySelector(".fight-container--animate-box")
const enemy = document.querySelector('.progress-enemy>img');
const slotEnemyActive = document.querySelectorAll('.slot--image>img');
const slotenemy = document.querySelectorAll('.slot--image');
const animationTitle = document.querySelector('.animation-title');
export {
    animationTitle,
    slotenemy,
    slotEnemyActive,
    enemy,
    bar,
    progressLine,
    rightHand,
    rightEffect,
    leftHand,
    leftEffect,
    winRoundReferee,
    winRoundRefereeText,
    arrovNext,
    progress,
    targetBg,
    slotImageBox,
    roundNumber,
    roundPict,
    fightContainer,
    animateBox
}
