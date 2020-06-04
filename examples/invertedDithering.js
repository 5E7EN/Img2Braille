const { braillefy } = require('img2braille');

(async () => {
    const asciiOpts = {
        dither: true,
        invert: true,
    };

    const result = await braillefy('https://i.nuuls.com/LAOzc.png', 30, asciiOpts);

    console.log(result);
})();
