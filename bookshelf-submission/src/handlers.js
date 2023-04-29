const { nanoid } = require('nanoid');
const books = require('./books');
const { booksValidation, getBooks } = require('./booksUtils');

module.exports = {
  addBookHandler: async (req, h) => {
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = req.payload;

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage;

    const newBook = {
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

    const validation = await booksValidation(newBook)
      .then((res) => res)
      .catch((err) => err);

    if (validation === 'validated') {
      try {
        books.push(newBook);
        return h
          .response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
              bookId: id,
            },
          })
          .code(201);
      } catch (error) {
        return h
          .response({
            status: 'error',
            message: 'Buku Gagal ditambahkan',
          })
          .code(500);
      }
    } else {
      return h.response(validation.response).code(validation.code);
    }
  },
  getAllBooksHandler: (req, h) => getBooks(req, h, books),
  getBookByIdHandler: (req, h) => getBooks(req, h, books),
  editBookHandler: async (req, h) => {
    const { id } = req.params;
    const {
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      reading,
    } = req.payload;
    const updatedAt = new Date().toISOString();
    const index = books.findIndex((b) => b.id === id);
    const finished = pageCount === readPage;

    const validation = await booksValidation(req.payload, false)
      .then((res) => res)
      .catch((err) => err);

    if (validation === 'validated') {
      if (index < 0) {
        return h
          .response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Id tidak ditemukan',
          })
          .code(404);
      }
      if (index !== -1) {
        books[index] = {
          ...books[index],
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
    }
    return h.response(validation.response).code(validation.code);
  },
  deleteBookById: (req, h) => {
    const { id } = req.params;
    const index = books.findIndex((book) => book.id === id);
    if (index !== -1) {
      books.splice(index, 1);
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
  },
};
