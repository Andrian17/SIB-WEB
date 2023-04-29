const booksValidation = ({ name, readPage, pageCount }, isAdd = true) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      reject({
        response: {
          status: 'fail',
          message: isAdd
            ? 'Gagal menambahkan buku. Mohon isi nama buku'
            : 'Gagal memperbarui buku. Mohon isi nama buku',
        },
        code: 400,
      });
    }

    if (readPage > pageCount) {
      reject({
        response: {
          status: 'fail',
          message: isAdd
            ? 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
            : 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        },
        code: 400,
      });
    }

    resolve('validated');
  });
};

const getBooks = (req, h, books) => {
  const { reading, finished, name } = req.query;
  const { id } = req.params;

  //   Get book by Id
  if (id) {
    const book = books.filter((Book) => Book.id === id)[0];
    if (book) {
      return h
        .response({
          status: 'success',
          data: {
            book,
          },
        })
        .code(200);
    }

    return h
      .response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      })
      .code(404);
  }

  if (reading) {
    return h
      .response({
        status: 'success',
        data: {
          books: books
            .filter((books) => books.reading == reading)
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
          books: books
            .filter((e) => e.finished == finished)
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
          books: books
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
        books: books.map((book) => ({
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        })),
      },
    })
    .code(200);
};

module.exports = {
  getBooks,
  booksValidation,
};
