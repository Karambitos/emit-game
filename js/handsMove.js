addElement();
const toMove = {
  count: 0,
  hand: true,

  toChooseHand(e) {
    if (this.hand) {
      this.hand = false;
      this.toMoveRightHand(e);
    } else {
      this.hand = true;
      this.toMoveLeftHand(e);
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
    progress.textContent = `${(this.count += 25)}%`;
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
    progress.textContent = `${(this.count += 25)}%`;
  },
};

function addElement() {
  let div = `<div class='virusRight target'></div><div class='virusLeft target'></div>`;
  document
    .querySelector(".fight-container")
    .insertAdjacentHTML("afterbegin", div);

  let allTargets = document.querySelectorAll(".target");

  allTargets.forEach((el) =>
    el.addEventListener("click", (e) => toMove.toChooseHand(e))
  );
}
