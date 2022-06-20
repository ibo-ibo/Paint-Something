"use strict";

const canvas = document.querySelector("#draw");
const context = canvas.getContext("2d");
canvas.widht = window.innerWidth * 2;
canvas.height = window.innerHeight;
context.strokeStyle = "#BADA55";
context.lineJoin = "round";
context.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

const draw = function (e) {
  if (!isDrawing) return;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(e.offsetX, e.offsetY);
  context.lineWidth = 30;
  context.stroke();
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  lastX = e.offsetX;
  lastY = e.offsetY;
  hue++;
  hue = hue >= 360 ? 0 : hue;
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
