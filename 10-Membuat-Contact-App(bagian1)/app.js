const contacts = require('./contacts');

const main = async () => {
  const nama = await contacts.tulispertanyaan('Masukkan nama anda : ');
  const email = await contacts.tulispertanyaan('Masukkan email anda : ');
  const noHP = await contacts.tulispertanyaan('Masukkan No HP anda : ');

  contacts.simpanContact(nama, email, noHP);
};

main();
