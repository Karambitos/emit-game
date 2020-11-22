addElement();
const toMove = {
  count: 0,

  toMoveHand(e) {
    let rightHand = document.querySelector(".right-hand");
    rightHand.style.top = e.clientY + "px";
    rightHand.style.left = e.clientX + "px";

    setTimeout(function () {
      rightHand.style.top = "";
      rightHand.style.left = "";
      rightHand.style.right = 18 + "%";
      rightHand.style.bottom = -23 + "%";
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
    el.addEventListener("click", (e) => toMove.toMoveHand(e))
  );
}
