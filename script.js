const container = document.querySelector("div.container");
const resizeBtn = document.querySelector("button#ask-grid-size");
let gridSize = 16;

function RandomNumberBetween1and255(){
  return Math.floor(Math.random() * 256);
}

function generateRandomColor() {
  return `rgb(${RandomNumberBetween1and255()}, ${RandomNumberBetween1and255()}, ${RandomNumberBetween1and255()})`;
}

resizeBtn.addEventListener("click", () => {
  const answer = prompt("Enter the grid size | e.g : 16x16 grid, type 16.");
  if (answer < 100 && answer > 0){
    gridSize = answer;
    generateGrid()
  } else {
    alert("Please enter a number between 1 & 100.")
  }
})

function generateGrid(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (let i = 0; i < (gridSize*gridSize); i++) {
    const cube = document.createElement("div");
    cube.style.flexBasis = `calc(100% / ${gridSize})`;
    cube.style.height = `calc(100% / ${gridSize})`;
    cube.classList.add("cube")
    container.appendChild(cube);
    cube.addEventListener("mouseenter", () => {
      cube.style.backgroundColor = generateRandomColor();
    });
  }
}

generateGrid();