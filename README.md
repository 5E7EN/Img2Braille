![npm](https://img.shields.io/npm/v/img2braille?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/img2braille?style=for-the-badge)

# Img2Braille - Dank Edition

JavaScript utility to generate braille (unicode) text from an image.

## Installation

You may install this package with npm using:

```
npm install img2braille
```

## Usage

After importing the package into your project, a `braillefy` method will be accessible to you. This function accepts 3 arguments, as described below:

-   `imageURL` (string) - The source URL of the target image. This can be represented as either a local or remote path.
-   `asciiWidth` (integer) - The desired width of the generated ASCII.
-   `options` - An object with following (all optional):
    -   `dither` (boolean) - If truthy, a dithering effect will be applied to the output which will produce an overall cleaner/smoother result.
    -   `invert` (boolean) - If truthy, the background colors will be inverted (light -> dark). This is especially useful in cases where you'd like to match a certain background color scheme.
    -   `lineSeparator` (string) - Character of which to succeed each end-of-line. Default: `\n` (newline).
    -   `colors` - An object representing RGB threshold levels to be applied during generation. Minimum: 0.01 - Maximum: 10. Default: `{ red: 1, green: 1, blue: 1 }`.

## Examples

```
const { braillefy } = require('img2braille');

(async () => {
    const asciiOpts = {
        dither: false,
        invert: false,
    };

    const result = await braillefy('https://i.nuuls.com/LAOzc.png', 30, asciiOpts);

    console.log(result);

    /*
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣿⣿⣿⣿⣷⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣫⣵⣿⣿⣿⣿⣿⣿⣿⣷⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣳⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⠍⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠄⠄⠄⠄⠄⠄⠙⢿⣿
    ⣿⣿⡿⠉⠄⠄⠄⠄⢤⣶⣾⣿⣿⠿⠷⠲⢶⣦⡄⠄⠄⠄⢀⣀⣀⣤⣤⣤⣤⣹
    ⣿⡿⠁⠄⠄⠄⠄⠄⠄⠉⠛⠻⠇⠈⠁⠄⠄⡿⣿⣿⣿⣿⣿⣿⠋⠄⠄⡀⢿⢿
    ⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⠉⠛⠛⠃⠄⠄⠄⠄⣴⣾
    ⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠠⠄⠄⠄⣀⣹⣿
    ⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣶⣿⣿⣿⣿
    ⣿⣆⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣶⣤⣀⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⣀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣷⣶⣶⣤⣤⣤⣤⣤⣤⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    */

    /* Dithering (dither: true):
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢯⣫⢯⢾⢽⢵⡻⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣯⡳⡯⣞⡽⡽⡽⡵⣯⣳⢽⣿⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣿⡿⣫⣞⡽⣝⡮⡯⣯⣫⢯⣞⢮⢷⡹⣿⣿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⡿⡽⡵⣳⢽⡳⡽⣽⡺⡮⡷⡽⡽⡽⣝⣞⢿⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣿⣫⢯⢯⣳⢯⢯⣻⣺⡺⡽⡽⣝⡽⣺⢵⣫⢞⣿⣿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣿⣳⣳⣫⢗⣯⡳⡯⣞⡮⡯⡯⣯⣺⢽⣺⢽⣺⣝⡮⢿⣿⣿⣿⣿
    ⣿⣿⣿⣿⣿⣗⣗⣗⡽⣝⡮⡯⣻⢮⢯⣫⢯⢞⡮⡷⣝⣗⣗⣗⡽⣝⢿⣿⣿⣿
    ⣿⣿⣿⣿⣿⢕⢕⢕⢝⢕⢝⢍⢇⢏⢝⢬⢭⠱⡍⡎⡎⡦⡱⡔⣜⢔⡕⡭⣻⣿
    ⣿⣿⡿⡹⡢⡣⣣⢣⢳⣵⣿⣿⡿⠟⠞⠞⢾⣮⡎⡇⢏⢎⢎⣎⣎⡦⡧⣧⣲⣹
    ⣿⡿⡱⡱⡕⣝⢜⡜⣕⢭⢛⡻⢅⠈⡁⠠⠄⡿⢯⣿⣿⣿⣿⡿⠋⠐⠄⡀⢿⢯
    ⣿⢇⢗⢕⡝⣜⢜⢼⢸⢜⢜⢜⢕⢕⢪⢪⠪⡪⡪⣪⢪⢫⢫⢣⢤⢰⢰⢰⣱⣿
    ⣿⢱⢕⢇⢧⢣⢳⡱⡣⡳⡱⡕⡕⡕⡕⡕⡕⡕⡝⡸⡨⢕⠕⠕⢅⢇⢕⢥⣹⣿
    ⣿⢸⢜⢎⢎⢧⢣⢇⢏⢮⢪⠸⡨⢌⢌⢌⢈⢄⢡⠠⢄⡢⡢⡱⣵⣶⣿⣿⣿⣿
    ⣿⡮⡪⢎⢧⢳⢱⢣⢳⢱⢣⢫⢪⢪⢢⢣⢣⢣⢣⢫⢕⢪⣺⣾⣿⣿⣿⣿⣿⣿
    ⢯⡻⡮⣮⣪⢪⢪⢕⢭⢪⢣⢫⢪⢕⢭⢪⢕⢕⢕⣕⡵⣻⣺⣺⣻⣿⣿⣿⣿⣿
    ⡯⣯⣻⣺⣺⣳⣳⢵⢵⢵⣹⣜⢵⢵⢵⢵⢵⡳⣯⣺⢽⢵⣳⣳⣳⣻⣿⣿⣿⣿
    ⡯⣞⣞⣞⣞⣞⢾⢽⢽⢽⣺⣺⢽⢽⢽⢽⢽⢽⣺⣺⢽⢽⣺⣺⣺⣺⣿⣿⣿⣿
    */

    /* Inverted with dithering (invert: true):
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⡐⠔⡐⡁⡂⡊⢄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠐⢌⢐⠡⢂⢂⢂⢊⠐⠌⡂⠄⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠄⢀⠔⠡⢂⠢⢑⢐⠐⠔⡐⠡⡑⡈⢆⠄⠄⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⢀⢂⢊⠌⡂⢌⢂⠂⢅⢑⢈⢂⢂⢂⠢⠡⡀⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠄⠔⡐⡐⠌⡐⡐⠄⠅⢅⢂⢂⠢⢂⠅⡊⠔⡡⠄⠄⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠄⠌⠌⠔⡨⠐⢌⢐⠡⢑⢐⢐⠐⠅⡂⠅⡂⠅⠢⢑⡀⠄⠄⠄⠄
    ⠄⠄⠄⠄⠄⠨⠨⠨⢂⠢⢑⢐⠄⡑⡐⠔⡐⡡⢑⢈⠢⠨⠨⠨⢂⠢⡀⠄⠄⠄
    ⠄⠄⠄⠄⠄⡪⡪⡪⡢⡪⡢⡲⡸⡰⡢⡓⡒⣎⢲⢱⢱⢙⢎⢫⠣⡫⢪⢒⠄⠄
    ⠄⠄⢀⢆⢝⢜⠜⡜⡌⠊⠄⠄⢀⣠⣡⣡⡁⠑⢱⢸⡰⡱⡱⠱⠱⢙⢘⠘⠍⠆
    ⠄⢀⢎⢎⢪⠢⡣⢣⠪⡒⡤⢄⡺⣷⢾⣟⣿⢀⡐⠄⠄⠄⠄⢀⣴⣯⣿⢿⡀⡐
    ⠄⡸⡨⡪⢢⠣⡣⡃⡇⡣⡣⡣⡪⡪⡕⡕⣕⢕⢕⠕⡕⡔⡔⡜⡛⡏⡏⡏⠎⠄
    ⠄⡎⡪⡸⡘⡜⡌⢎⢜⢌⢎⢪⢪⢪⢪⢪⢪⢪⢢⢇⢗⡪⣪⣪⡺⡸⡪⡚⠆⠄
    ⠄⡇⡣⡱⡱⡘⡜⡸⡰⡑⡕⣇⢗⡳⡳⡳⡷⡻⡞⣟⡻⢝⢝⢎⠊⠉⠄⠄⠄⠄
    ⠄⢑⢕⡱⡘⡌⡎⡜⡌⡎⡜⡔⡕⡕⡝⡜⡜⡜⡜⡔⡪⡕⠅⠁⠄⠄⠄⠄⠄⠄
    ⡐⢄⢑⠑⠕⡕⡕⡪⡒⡕⡜⡔⡕⡪⡒⡕⡪⡪⡪⠪⢊⠄⠅⠅⠄⠄⠄⠄⠄⠄
    ⢐⠐⠄⠅⠅⠌⠌⡊⡊⡊⠆⠣⡊⡊⡊⡊⡊⢌⠐⠅⡂⡊⠌⠌⠌⠄⠄⠄⠄⠄
    ⢐⠡⠡⠡⠡⠡⡁⡂⡂⡂⠅⠅⡂⡂⡂⡂⡂⡂⠅⠅⡂⡂⠅⠅⠅⠅⠄⠄⠄⠄
    */
})();
```

See the examples folder provided in the repo for more information.

<br>
<hr>
<br>

<i>Originally masterminded by the creator of https://505e06b2.github.io/Image-to-Braille, this utility has been refactored and converted into a node.js package.</i>
