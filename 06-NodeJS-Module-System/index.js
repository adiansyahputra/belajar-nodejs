// const nama = 'Adiansyah Putra';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); //third party module / npm module / node_modules

// console.log('hello wpu!');

const coba = require('./coba');

console.log(coba.cetakNama('adi'), coba.PI, coba.mahasiswa.cetakMhs(), new coba.Orang());
