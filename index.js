// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// helper functions
const foreach = (array, action) => {
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
};


// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = list => {
  let daftarBelanja = [];

  foreach(list, item => { daftarBelanja.push(`- ${item.nama} x ${item.kuantitas}`) });

  return daftarBelanja;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = list => {
  let total = 0;

  foreach(list, item => { total += item.harga * item.kuantitas });

  return total;
};


// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
