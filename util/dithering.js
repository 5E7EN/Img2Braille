/* Original implementation: https://gist.github.com/PhearTheCeal/6443667 */

let imageData;

function clip(x) {
    return x < 0 ? 0 : x > 255 ? 255 : x;
}

function setPixel(x, y, color) {
    const index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = parseInt(color[0] + 0.5);
    imageData.data[index + 1] = parseInt(color[1] + 0.5);
    imageData.data[index + 2] = parseInt(color[2] + 0.5);
    imageData.data[index + 3] = 255;
}

function colorDiff(one, two) {
    return [one[0] - two[0], one[1] - two[1], one[2] - two[2]];
}

function colorAddErr(x, y, errRed, errGreen, errBlue) {
    const index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = clip(imageData.data[index + 0] + errRed);
    imageData.data[index + 1] = clip(imageData.data[index + 1] + errGreen);
    imageData.data[index + 2] = clip(imageData.data[index + 2] + errBlue);
    imageData.data[index + 3] = 255;
}

function findClosestPaletteColor(pixel) {
    return 0.2126 * pixel[0] + 0.7152 * pixel[1] + 0.0722 * pixel[2] > 128 ? [255, 255, 255] : [0, 0, 0];
}

function getPixel(x, y) {
    const index = (x + y * imageData.width) * 4;
    return [imageData.data[index + 0], imageData.data[index + 1], imageData.data[index + 2]];
}

function applyDithering(canvas) {
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    let oldPixel;
    let newPixel;
    let quantError;
    let errRed, errGreen, errBlue;

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            oldPixel = getPixel(x, y);
            newPixel = findClosestPaletteColor(oldPixel);
            setPixel(x, y, newPixel);
            quantError = colorDiff(oldPixel, newPixel);

            errRed = quantError[0];
            errGreen = quantError[1];
            errBlue = quantError[2];

            if (x + 1 < canvas.width) colorAddErr(x + 1, y, (7 / 16) * errRed, (7 / 16) * errGreen, (7 / 16) * errBlue);
            if (x - 1 > 0 && y + 1 < canvas.height) colorAddErr(x - 1, y + 1, (3 / 16) * errRed, (3 / 16) * errGreen, (3 / 16) * errBlue);
            if (y + 1 < canvas.height) colorAddErr(x, y + 1, (5 / 16) * errRed, (5 / 16) * errGreen, (5 / 16) * errBlue);
            if (x + 1 < canvas.width) colorAddErr(x + 1, y + 1, (1 / 16) * errRed, (1 / 16) * errGreen, (1 / 16) * errBlue);
        }
    }

    ctx.putImageData(imageData, 0, 0);
}

module.exports = { applyDithering };
