const container = document.querySelector("div.container");

for (let i = 0; i < (16*16); i++) {
  const cube = document.createElement("div");
  cube.classList.add("cube");
  container.appendChild(cube);
}
