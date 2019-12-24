![npm](https://img.shields.io/npm/v/img2braille?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/img2braille?style=for-the-badge)

# Img2Brialle - Dank Edition
JavaScript utility to generate braille (unicode) text from an image.

# Usage

`toBraille()` accepts 3 parameters - the image, ASCII width, and a color object that contains RGB threshold levels.
<br>
You may create an Image object using `new Image();`
<br>
<br>
Example:
```
const { Image, toBraille } = require('img2braille');

let img = new Image();
img.onload = () => {
  console.log(toBraille(img, 30, { red: 1, green: 1, blue: 1 }));
};
img.src = 'path/to/image.png';

/* Sample Output -
⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⣉⣁⣀⣤⣤⣀⣈⣉⠙⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠟⠋⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣀⠙⠻⣿⣿⣿⣿⣿
⣿⣿⣿⠟⠁⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠈⠻⣿⣿⣿
⣿⣿⠋⢠⣾⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣷⡄⠙⣿⣿
⣿⠃⢠⣿⣿⣿⡟⢁⣤⣤⣄⠈⢿⣿⣿⣿⣿⡿⠁⣠⣤⣤⡈⢻⣿⣿⣿⡄⠘⣿
⡏⢠⣿⣿⣿⣿⣧⣼⣿⣿⣿⣦⣼⣿⣿⣿⣿⣧⣴⣿⣿⣿⣧⣼⣿⣿⣿⣿⡄⢹
⠁⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠈
⠄⣿⣿⡟⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⢻⣿⣿⠄
⡀⢸⣿⣿⠄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠄⣿⣿⡇⢀
⣇⠘⣿⣿⣇⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣸⣿⣿⠃⣸
⣿⡄⠘⣿⣿⣆⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⣰⣿⣿⠃⢠⣿
⣿⣿⣄⠘⢿⣿⣷⣄⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⣠⣾⣿⡿⠃⣠⣿⣿
⣿⣿⣿⣦⡀⠙⢿⣿⣷⣦⣄⣉⠙⠛⠛⠛⠛⠋⣉⣠⣴⣾⣿⡿⠋⢀⣴⣿⣿⣿
⣿⣿⣿⣿⣿⣦⣄⠉⠛⠿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⠿⠛⠉⣠⣴⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣶⣤⣄⣉⡉⠉⠛⠛⠉⢉⣉⣠⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿
*/
```
<br>
<br>
<br>
<i>Originally masterminded by the creator of https://505e06b2.github.io/Image-to-Braille, this utility has been refactored and converted into a node.js package.</i>
