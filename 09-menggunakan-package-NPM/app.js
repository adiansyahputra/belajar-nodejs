const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('adi@gmail.c'));
// console.log(validator.isMobilePhone('0823123123', 'id-ID'));
// console.log(validator.isNumeric('0823123123'));

// console.log(chalk.black.italic.bgBlue('Hello WORLD'));
const nama = 'adi';
const pesan = chalk`lorem {bgRed.black asdmkasmd} askdmaksmd asdmkasd {bgGreen.italic.yellow.strikethrough.bold asdmkaskd} dasdmkasd asdmkas asdmka dasmdkas adskmda. nama saya : ${nama}`;
console.log(pesan);
