addElement();

const progressLine = document.querySelector("span.progress");
const toMove = {
  count: 0,
  hand: true,
  hitPersent: 12,

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
    let rightHand = document.querySelector(".right-hand");
    rightHand.style.top = e.clientY + "px";
    rightHand.style.left = e.clientX + "px";

    setTimeout(function () {
      rightHand.style.top = "";
      rightHand.style.left = "";
    }, 500);
    let progress = document.querySelector(".progress-percent");
    //   progress.textContent = `${(this.count += 25)}%`;
    this.count += 25;
  },

  toMoveLeftHand(e) {
    let leftHand = document.querySelector(".left-hand");

    leftHand.style.top = e.clientY + "px";

    leftHand.style.left = e.clientX - 200 + "px";

    setTimeout(function () {
      leftHand.style.top = "";
      leftHand.style.left = "";
    }, 500);
    let progress = document.querySelector(".progress-percent");

    if (!progressLine.style.height) {
      progressLine.style.height = `${this.count + this.hitPersent}%`;
    } else if (parseInt(progressLine.style.height) < 100) {
      console.log(parseInt(progressLine.style.height));
      progressLine.style.height = `${this.count + this.hitPersent}%`;
    }

    if (parseInt(progress.textContent) < 100) {
      progress.textContent = `${(this.count += this.hitPersent)}%`;
      parseInt(progress.textContent);
    } else {
      progress.textContent = `100%`;
    }

    if (
      parseInt(progress.textContent) >= 60 &&
      !document.querySelector(".virusRight")
    ) {
      addVirusElement();
    }
  },
};

function addElement() {
  let div = `<div class='main-target secondTarget'></div>`;
  document
    .querySelector(".fight-container")
    .insertAdjacentHTML("afterbegin", div);

  let allTargets = document.querySelectorAll(".secondTarget");

  allTargets.forEach((el) =>
    el.addEventListener("click", (e) => toMove.toChooseHand(e))
  );
}

function addVirusElement() {
  let div = `<div class='virusRight target'></div><div class='virusLeft target'></div>`;
  document
    .querySelector(".fight-container")
    .insertAdjacentHTML("afterbegin", div);

  let allTargets = document.querySelectorAll(".target");

  allTargets.forEach((el) =>
    el.addEventListener("click", (e) => toMove.toChooseHand(e))
  );
}

// let rightHand = document.querySelector(".right-hand");

// console.dir(rightHand[0].sheet);
