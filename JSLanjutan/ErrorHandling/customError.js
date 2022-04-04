class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

let jsonP = '{"nama": "Rizki","umur": "20","alamat": "Jakarta"}';

try {
  let dataUser = JSON.parse(jsonP);
  if (!dataUser.hobi) {
    throw new ValidationError("'hobi' Tidak Boleh Kosong");
  }
  if (!dataUser.nama) {
    throw new ValidationError("'nama' Tidak Boleh Kosong");
  }
  console.log(dataUser.nama);
  console.log(dataUser.umur);
  console.log(dataUser.alamat);
  console.log(dataUser.hobi);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid Data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
} finally {
  console.log("Selesai");
}
