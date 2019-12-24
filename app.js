const { Image, createCanvas } = require('canvas');
let canvas = createCanvas();

function getChar(current) {
  allzeros = true;
  for (let i = 0; i < current.length; i++)
    if (current[i] != 0) {
      allzeros = false;
      break;
    }
  if (!allzeros) {
    total_val = (current[0] << 0) + (current[1] << 1) + (current[2] << 2) + (current[4] << 3) + (current[5] << 4) + (current[6] << 5) + (current[3] << 6) + (current[7] << 7);
  } else {
    total_val = 4;
  }
  return String.fromCharCode(0x2800 + total_val);
}

function toBraille(img, asciiWidth, colors) {
  let ascii = '';
  {
    let canvasWidth = img.width;
    let canvasHeight = img.height;
    if (img.width != asciiWidth * 2) {
      canvasWidth = asciiWidth * 2;
      canvasHeight = (canvasWidth * img.height) / img.width;
    }
    canvas.width = canvasWidth - (canvasWidth % 2);
    canvas.height = canvasHeight - (canvasHeight % 4);
  }

  let ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  for (let imgy = 0; imgy < canvas.height; imgy += 4) {
    for (let imgx = 0; imgx < canvas.width; imgx += 2) {
      const current = [0, 0, 0, 0, 0, 0, 0, 0];
      let cindex = 0;
      for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 4; y++) {
          const temp = ctx.getImageData(imgx + x, imgy + y, 1, 1).data;
          const avg = (temp[0] / colors.red + temp[1] / colors.green + temp[2] / colors.blue) / 3;
          if (avg > 128) current[cindex] = 1;
          cindex++;
        }
      }
      ascii += getChar(current);
    }
    ascii += '\n';
  }
  return ascii;
}

module.exports = { Image, toBraille };
