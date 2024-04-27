console.clear();

const width = document.getElementById("width-box");
const topTicksContainer = document.querySelector(".top-ticks");
const bottomTicksContainer = document.querySelector(".bottom-ticks");

function reportWindowscreen() {
  width.textContent = `${window.innerWidth}px`;
}

function createTicks(numberOfTicks, tickContainer, bottomTicksContainer) {
  tickContainer.innerHTML = "";
  bottomTicksContainer.innerHTML = "";

  for (let i = 0; i < numberOfTicks; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      tickContainer.innerHTML += `<div class='large'></div>`;
      bottomTicksContainer.innerHTML += `<div class='bottom-large'></div>`;
    } else if (i % 5 === 0) {
      tickContainer.innerHTML += `<div class='medium'></div>`;
      bottomTicksContainer.innerHTML += `<div class='bottom-medium'></div>`;
    } else if (i % 3 === 0) {
      tickContainer.innerHTML += `<div class='small'></div>`;
      bottomTicksContainer.innerHTML += `<div class='bottom-small'></div>`;
    }
  }
}

function handleResize() {
  reportWindowscreen();
  const numberOfTicks = Math.floor(window.innerWidth / 5);

  if (window.innerWidth >= 1400) {
    createTicks(numberOfTicks * 2, topTicksContainer, bottomTicksContainer);
  } else if (window.innerWidth < 1400 && window.innerWidth >= 1100) {
    createTicks(numberOfTicks, topTicksContainer, bottomTicksContainer);
  } else {
    createTicks(numberOfTicks / 4, topTicksContainer, bottomTicksContainer);
  }
}

window.addEventListener("resize", handleResize);

handleResize();
