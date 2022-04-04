const {
  addBooks,
  getAllBooks,
  getBookById,
  editBookById,
  deleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => {
      return 'ok';
    },
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBooks,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById,
  },
];

module.exports = routes;
