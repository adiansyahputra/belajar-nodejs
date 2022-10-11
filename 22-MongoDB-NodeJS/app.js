const { MongoClient } = require('mongodb');

const uri = 'mongodb://0.0.0.0:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log('Koneksi gagal!');
  }

  // pilih database
  const db = client.db(dbName);

  //Menambahkan 1 data ke collection mahasiswa
  // db.collection('mahasiswa').insertOne(
  //   {
  //     nama: 'Erik',
  //     email: 'erik@gmail.com',
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log('gagal menambahkan data!');
  //     }

  //     console.log(result);
  //   }
  // );

  // Menambahkan lebih dari 1 data
  // db.collection('mahasiswa').insertMany(
  //   [
  //     {
  //       nama: 'Erik',
  //       email: 'erik@yahoo.com',
  //     },
  //     {
  //       nama: 'avip',
  //       email: 'avip@gmail.com',
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log('gagal menambahkan data!');
  //     }

  //     console.log(result);
  //   }
  // );

  // //  Menampilkan semua data yang ada di collection 'mahasiswa'
  // console.log(
  //   db
  //     .collection('mahasiswa')
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  //  Menampilkan data berdasarkan kriteria yang ada di collection 'mahasiswa'
  // console.log(
  //   db
  //     .collection('mahasiswa')
  //     .find({ nama: 'Erik' })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  //  Mengubah data berdasarkan id
  // const updatePromise = db.collection('mahasiswa').updateOne(
  //   {
  //     nama: 'Avip Syaifulloh',
  //   },
  //   {
  //     $set: {
  //       email: 'avip@ayy',
  //     },
  //   }
  // );

  // updatePromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //  Mengubah data lebih dari 1, berdasarkan kriteria
  // db.collection('mahasiswa').updateMany(
  //   {
  //     nama: 'Erik',
  //   },
  //   {
  //     $set: {
  //       nama: 'Erik Doank',
  //     },
  //   }
  // );

  // Menghapus 1 data
  // db.collection('mahasiswa')
  //   .deleteOne({
  //     nama: 'Avip Syaifulloh',
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Menghapus lebih dari 1 data
  db.collection('mahasiswa')
    .deleteMany({
      nama: 'Erik Doank',
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
