const bar = document.querySelector('.bar');
const progressLine = document.querySelector("span.progress");
let rightHand = document.querySelector(".right-hand");
const rightEffect = document.querySelector(".right-hand--effect");
let leftHand = document.querySelector(".left-hand");
const leftEffect = document.querySelector(".left-hand--effect");
const winRoundReffery = document.querySelector('.reffery-win');
const winRoundRefferyText = winRoundReffery.querySelector('.reffery-win--text');
let arrovNext = document.querySelector(".start--arrow-next");
let progress = document.querySelector(".progress-percent");
const targetBg = document.querySelector(".main-target");
const slotImageBox = document.querySelector(".slot--image");
const roundNumber = document.querySelector(".round-card");
const roundPict = document.querySelector(".round-card> img");
const animateBox = document.querySelector(".fight-container--animate-box")
let enemy = document.querySelector('.progress-enemy>img');
let slotEnemyActive = document.querySelectorAll('.slot--image>img');
let slotenemy = document.querySelectorAll('.slot--image');

export {
    slotenemy,
    slotEnemyActive,
    enemy,
    bar,
    progressLine,
    rightHand,
    rightEffect,
    leftHand,
    leftEffect,
    winRoundReffery,
    winRoundRefferyText,
    arrovNext,
    progress,
    targetBg,
    slotImageBox,
    roundNumber,
    roundPict,
    animateBox
}