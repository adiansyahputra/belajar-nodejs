const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/wpu', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// // Menambah 1 data
// const contact1 = new Contact({
//   nama: 'Kian Fajar',
//   nohp: '0877777777',
//   email: 'kian@gmail.com',
// });

// // Simpan ke collection
// contact1.save().then((contact) => {
//   console.log(contact);
// });
