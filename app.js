const canvas = document.querySelector('#myCanvas');
canvas.width = window.innerWidth - 100;
canvas.height = 615;

let ctx = document.querySelector("#myCanvas").getContext("2d");

let isMouseDown = false;

document.querySelector("#myCanvas").addEventListener("mousedown", (event) => {
  isMouseDown = true;

});
document.querySelector("#myCanvas").addEventListener("mouseup", (event) => {
  isMouseDown = false;
  ctx.beginPath();

});

document.querySelector("#myCanvas").addEventListener("mouseout", (event) => {
  isMouseDown = false;
  ctx.beginPath();

});

document.querySelector("#myCanvas").addEventListener("mousemove", (event) => {

  if (isMouseDown) {
    // console.log("move: ", event);
    let drawColor = document.querySelector(`#colorBox`).value;
    let drwaWidth = document.querySelector(`.pen_size`).value;

    console.log("h: ", event.offsetX);
    console.log("w: ", event.offsetY);
    // ctx.fillRect(event.offsetX, event.offsetY, 2, 2);

    ctx.lineWidth = drwaWidth;
    ctx.lineCap = "round";
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY)
    ctx.strokeStyle = drawColor;
  }

});


let download = () => {
  let canvas = document.querySelector("#myCanvas");
  let anchor = document.createElement("a");
  anchor.href = canvas.toDataURL("image/png");
  anchor.download = "image.png";
  anchor.click();
};

const size = document.querySelector(".pen_size")

function show() {
  size.style.display = "inline";
  size.style.height = "30px"
};
