addElement();

const progressLine = document.querySelector('span.progress');
const toMove = {
  count: 0,
  hitPersent: 12,

  toMoveHand(e) {
    let rightHand = document.querySelector(".right-hand");
    rightHand.style.top = e.clientY + "px";
    rightHand.style.left = e.clientX + "px";

    setTimeout(function () {
      rightHand.style.top = "";
      rightHand.style.left = "";
      rightHand.style.right = 18 + "%";
      rightHand.style.bottom = -23 + "%";
    }, 200);

    let progress = document.querySelector(".progress-percent");

    if (!progressLine.style.height) {
      progressLine.style.height = `${(this.count + this.hitPersent)}%`
    } else if (parseInt(progressLine.style.height) < 100) {
      console.log(parseInt(progressLine.style.height));
      progressLine.style.height = `${(this.count + this.hitPersent)}%`
    }

    if (parseInt(progress.textContent) < 100) {
      progress.textContent = `${(this.count += this.hitPersent)}%`;
      parseInt(progress.textContent)
    } else {
      progress.textContent = `100%`;
    }

    if ((parseInt(progress.textContent) >= 60) && !(document.querySelector('.virusRight'))) {
      addVirusElement();
    }
  },
};

function addElement() {
  let div = `<div class='main-target target'></div>`;
  document
    .querySelector(".fight-container")
    .insertAdjacentHTML("afterbegin", div);

  let allTargets = document.querySelectorAll(".target");

  allTargets.forEach((el) =>
    el.addEventListener("click", (e) => toMove.toMoveHand(e))
  );
}

function addVirusElement() {
  let div = `<div class='virusRight target'></div><div class='virusLeft target'></div>`;
  document
    .querySelector(".fight-container")
    .insertAdjacentHTML("afterbegin", div);

  let allTargets = document.querySelectorAll(".target");

  allTargets.forEach((el) =>
    el.addEventListener("click", (e) => toMove.toMoveHand(e))
  );
}


// let rightHand = document.querySelector(".right-hand");

// console.dir(rightHand[0].sheet);