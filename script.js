const container = document.querySelector("div.container");

function RandomNumberBetween1and255(){
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  return `rgb(${RandomNumberBetween1and255()}, ${RandomNumberBetween1and255()}, ${RandomNumberBetween1and255()})`;
}

for (let i = 0; i < (16*16); i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
  container.appendChild(cube);
  cube.addEventListener("mouseenter", () => {
    cube.style.backgroundColor = generateRandomColor();
  });
}