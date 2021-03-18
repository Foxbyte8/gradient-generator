// Variables
const code = document.querySelector("#code");
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const body = document.querySelector("#gradient");

// set the gradient to the background
function setGradient() {
  const gradientStyle = `linear-gradient(to right, ${color1.value}, ${color2.value});`;
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  code.textContent = gradientStyle;
}

// DOM input
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
