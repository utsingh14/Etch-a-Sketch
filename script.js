const container = document.querySelector(".container");
const colorBtn = document.getElementById("colorBtn");
const bwBtn = document.getElementById("bwBtn");
container.innerHTML = "";

function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgb(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

function buildSquares(n) {
  container.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const div = document.createElement("div");
    div.classList = "row";
    for (let j = 0; j < n; j++) {
      let sq = document.createElement("div");
      sq.classList = "square";
      div.appendChild(sq);
    }
    container.appendChild(div);
  }

  const elements = document.querySelectorAll(".square");
  elements.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      // console.log(window.getComputedStyle(e).backgroundColor);
      if (colorBtn.style.display === "none") {
        e.style.backgroundColor = "rgb(0,0,0)";
        e.style.opacity = 0.75;
      } else {
        e.style.backgroundColor = random_rgba();
        e.style.opacity = 0.5;
      }
    });
  });
}
buildSquares(16);

function handleOnClick() {
  let size = prompt("Enter Size of the matrix (maximum 100):");
  if (size === null) return; // User pressed cancel

  let n = parseInt(size);
  while (isNaN(n) || n <= 0 || n > 100) {
    size = prompt("Enter Size of the matrix (maximum 100):");
    if (size === null) return; // Cancel inside loop
    n = parseInt(size);
  }

  buildSquares(n);
}
function handleClearAll() {
  console.log(container);
  for (let child of container.children) {
    for (let grandChild of child.children) {
      grandChild.style.backgroundColor = "rgba(0,0,0,0)";
      grandChild.style.opacity = 1;
    }
  }
}
function handleMode() {
  // Toggle their visibility
  if (colorBtn.style.display !== "none") {
    colorBtn.style.display = "none";
    bwBtn.style.display = "inline-block";
  } else {
    colorBtn.style.display = "inline-block";
    bwBtn.style.display = "none";
  }
}
