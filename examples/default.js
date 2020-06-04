const { braillefy } = require('img2braille');

(async () => {
    const result = await braillefy('https://i.nuuls.com/LAOzc.png', 30);

    console.log(result);
})();
