export default function GetParts(url, cols, rows) {
  const imageParts = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const el = document.createElement("div");
      el.classList.add("image-part");

      const n = getRandomInt(90) + 10;
      const eq = document.createElement("span");
      eq.classList.add("equation");
      const equation = getEquation(n);
      eq.textContent = equation;
      eq.setAttribute("data-answer", eval(equation));
      
      el.appendChild(eq);

      const inner = getInner(url, cols, rows, i, j);
      el.appendChild(inner);

      imageParts.push(el);
    }
  }
  return imageParts;
}

function getInner(url, cols, rows, i, j) {
  const inner = document.createElement("div");
  inner.classList.add("inner");
  inner.style.backgroundImage = `url(${url})`;
  inner.style.backgroundPosition = `${(j * 100) / (cols - 1)}% ${
    (i * 100) / (rows - 1)
  }%`;
  inner.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
  inner.style.backgroundOrigin = "border-box";
  inner.style.backgroundRepeat = "no-repeat";
  return inner;
}

function getEquation(n) {
  const second = getRandomInt(10)+1;
  const first = n - second;
  const sign = Math.random() > 0.5 ? "+" : "-";
  return `${first} ${sign} ${second}`;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
