//Date
// #1 tanpa parameter, yang berarti `myDate` akan berisi tanggal dan waktu saat ini
// const myDate = new Date();
// console.log(myDate);

// #2 parameter tanggal dalam bentuk string, misal  "January 01, 2021"
// const myDate = new Date("23 March, 2022");
// console.log(myDate);

// #3 parameter dalam bentuk number, misal 87400000
// const myDate = new Date(87400000);
// console.log(myDate);

// #4 parameter tanggal dalam bentuk number (7 parameter), [hour,minute,second,millisecond] bersifat opsional
// const myDate = new Date(2020, 4, 5);
// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());

// const tglLahir = Date.parse("April 5, 2022");
// console.log(tglLahir);

const myAge = (yourBirthDay) => {
  const today = Date.now();
  const birthday = new Date(yourBirthDay);

  const selisih = today - birthday.getTime();
  const diffDate = new Date(selisih);

  return diffDate.getUTCFullYear() - 1970;
};

console.log(myAge("April 5, 2001"));
