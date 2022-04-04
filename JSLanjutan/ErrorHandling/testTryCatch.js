// try {
//   console.log("try1");
//   error();
//   console.log("try2");
// } catch (e) {
//   //console.log("catch");
//   console.log(e.name);
//   console.log(e.message);
//   console.log(e.stack);
// } finally {
//   console.log("finally");
// }

//Throw Error
let jsonP = '{"nama": "Rizki","umur": "20","alamat": "Jakarta"}';

try {
  let dataUser = JSON.parse(jsonP);
  if (!dataUser.hobi) {
    throw new SyntaxError("'hobi' Tidak Boleh Kosong");
  }
  console.log(dataUser.nama);
  console.log(dataUser.umur);
  console.log(dataUser.alamat);
  console.log(dataUser.hobi);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
} finally {
  console.log("Selesai");
}
