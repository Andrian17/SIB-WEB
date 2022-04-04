const notes = require('./notes');
const { nanoid } = require('nanoid');

let catatan = [];

const simpanData = (request, h) => {
  const { title, tags, body } = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  catatan = {
    id,
    title,
    createdAt,
    updatedAt,
    tags,
    body,
  };

  if (!title || !tags || !body) {
    return h
      .response({
        status: 'fail',
        message: 'Catatan Gagal ditambahkan field kosong !',
      })
      .code(500);
  }

  notes.push(catatan);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;
  if (isSuccess) {
    return h
      .response({
        status: 'success',
        message: 'Catatan telah ditambahkan',
        data: {
          noteId: id,
        },
      })
      .code(201);
  }

  return h
    .response({
      status: 'fail',
      message: 'Catatan Gagal ditambahkan',
    })
    .code(500);
};

const tampilkanData = (request, h) => {
  return h
    .response({
      status: 'success',
      message: 'Data berhasil ditampilkan',
      data: {
        notes,
      },
    })
    .code(200);
};

const tampilkanDataById = (request, h) => {
  const { id } = request.params;
  const note = notes.filter((e) => e.id === id)[0];
  if (note !== undefined) {
    return h
      .response({
        status: 'success',
        message: `Data dengan ${id} berhasil ditampilkan`,
        data: {
          note: note,
        },
      })
      .code(200);
  }
  return h
    .response({
      status: 'fail',
      message: 'Catatan tidak ditemukan',
    })
    .code(404);
};

const ubahDataById = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);
  const { title, tags, body } = request.payload;
  const updatedAt = new Date().toISOString();
  if (index !== -1) {
    notes[index] = {
      ...notes[index],
      title,
      tags,
      body,
      updatedAt,
    };
    return h
      .response({
        status: 'success',
        noteId: `${id}`,
        message: `Data dengan id ${id} Berhasil diubah`,
      })
      .code(200);
  }
  return h
    .response({
      status: 'success',
      message: 'Gagal mengupdate',
    })
    .code(404);
};

const hapusDatabyId = (request, h) => {
  const { id } = request.params;
  const index = notes.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    return h
      .response({
        status: 'success',
        message: `Catatan Telah Dihapus`,
      })
      .code(200);
  }
  return h
    .response({
      status: 'fail',
      message: `Catatan dengan id ${id} tidak valid`,
    })
    .code(404);
};

module.exports = {
  tampilkanData,
  simpanData,
  tampilkanDataById,
  hapusDatabyId,
  ubahDataById,
};
