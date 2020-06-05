const { Image, createCanvas } = require('canvas');
const { applyDithering } = require('./util/dithering');

function getChar(current) {
    let allZeros = true;
    for (i = 0; i < current.length; i++) {
        if (current[i] != 0) {
            allZeros = false;
            break;
        }
    }

    if (!allZeros) {
        total_val = (current[0] << 0) + (current[1] << 1) + (current[2] << 2) + (current[4] << 3) + (current[5] << 4) + (current[6] << 5) + (current[3] << 6) + (current[7] << 7);
    } else {
        total_val = 4;
    }

    return String.fromCharCode(0x2800 + total_val);
}

function braillefy(imageURL = '', asciiWidth = 30, options = {}) {
    let ascii = '';
    if (!options.colors) options.colors = { red: 1, green: 1, blue: 1 };

    return new Promise((resolve, reject) => {
        const canvas = createCanvas();
        const img = new Image();

        img.onload = () => {
            let width = img.width;
            let height = img.height;

            if (img.width != asciiWidth * 2) {
                width = asciiWidth * 2;
                height = (width * img.height) / img.width;
            }

            canvas.width = width - (width % 2);
            canvas.height = height - (height % 4);

            ctx = canvas.getContext('2d');
            ctx.fillStyle = '#FFFFFF';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.mozImageSmoothingEnabled = false;
            ctx.webkitImageSmoothingEnabled = false;
            ctx.msImageSmoothingEnabled = false;
            ctx.imageSmoothingEnabled = false;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            if (options.dither) applyDithering(canvas);

            for (let imgy = 0; imgy < canvas.height; imgy += 4) {
                for (let imgx = 0; imgx < canvas.width; imgx += 2) {
                    const current = [0, 0, 0, 0, 0, 0, 0, 0];
                    let cindex = 0;
                    for (let x = 0; x < 2; x++) {
                        for (let y = 0; y < 4; y++) {
                            const temp = ctx.getImageData(imgx + x, imgy + y, 1, 1).data;
                            const avg = (temp[0] / options.colors.red + temp[1] / options.colors.green + temp[2] / options.colors.blue) / 3;
                            if (!options.invert) {
                                if (avg > 128) current[cindex] = 1;
                            } else {
                                if (avg < 128) current[cindex] = 1;
                            }
                            cindex++;
                        }
                    }
                    ascii += getChar(current);
                }
                ascii += options.lineSeparator || '\n';
            }

            return resolve(ascii);
        };

        img.onerror = (error) => {
            return reject(error);
        };

        img.src = imageURL;
    });
}

module.exports = { braillefy };
