const bookshelf = require('./books.js');
const { nanoid } = require('nanoid');
let tempBooks = [];

const addBooks = (request, h) => {
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  const id = nanoid(16);
  const finished = pageCount === readPage;
  tempBooks = {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt,
  };
  if (!name || name === '' || name === undefined) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku',
      })
      .code(400);
  } else if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  } else {
    bookshelf.push(tempBooks);
    const isSuccess = bookshelf.filter((book) => book.id === id).length > 0;
    if (isSuccess) {
      return h
        .response({
          status: 'success',
          message: 'Buku berhasil ditambahkan',
          data: {
            bookId: id,
          },
        })
        .code(201);
    }
  }
  return h
    .response({
      status: 'error',
      message: 'Buku Gagal ditambahkan',
    })
    .code(500);
};

const getAllBooks = (request, h) => {
  const { reading, finished, name } = request.query;
  if (reading) {
    return h
      .response({
        status: 'success',
        data: {
          books: bookshelf
            .filter((book) => book.reading == reading)
            .map(({ id, name, publisher }) => ({
              id,
              name,
              publisher,
            })),
        },
      })
      .code(200);
  }

  if (finished) {
    return h
      .response({
        status: 'success',
        data: {
          books: bookshelf
            .filter((book) => book.finished == finished)
            .map(({ id, name, publisher }) => ({
              id,
              name,
              publisher,
            })),
        },
      })
      .code(200);
  }
  if (name) {
    return h
      .response({
        status: 'success',
        data: {
          books: bookshelf
            .filter((book) =>
              book.name.toLowerCase().includes(name.toLowerCase())
            )
            .map((book) => ({
              id: book.id,
              name: book.name,
              publisher: book.publisher,
            })),
        },
      })
      .code(200);
  }
  return h
    .response({
      status: 'success',
      data: {
        books: bookshelf.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

const getBookById = (request, h) => {
  const { id } = request.params;
  const detailsBook = bookshelf.find((book) => {
    return book.id === id;
  });
  if (!detailsBook) {
    return h
      .response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      })
      .code(404);
  }
  return h
    .response({
      status: 'success',
      data: {
        book: detailsBook,
      },
    })
    .code(200);
};

const editBookById = (request, h) => {
  const { id } = request.params;
  const {
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
  } = request.payload;
  const updatedAt = new Date().toISOString();
  const finished = pageCount === readPage;
  const indexBooks = bookshelf.findIndex((book) => book.id === id);
  console.log(indexBooks);

  if (!name || name === undefined || name === '') {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku',
      })
      .code(400);
  } else if (readPage > pageCount) {
    return h
      .response({
        status: 'fail',
        message:
          'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
      })
      .code(400);
  } else if (indexBooks !== -1) {
    bookshelf[indexBooks] = {
      ...bookshelf[indexBooks],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished,
      reading,
      updatedAt,
    };
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  }
  return h
    .response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan',
    })
    .code(404);
};

const deleteBookById = (request, h) => {
  const { id } = request.params;
  const indexBook = bookshelf.findIndex((book) => book.id === id);
  if (indexBook !== -1) {
    bookshelf.splice(indexBook, 1);
    return h
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  }
  return h
    .response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan',
    })
    .code(404);
};

module.exports = {
  addBooks,
  getAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
};
