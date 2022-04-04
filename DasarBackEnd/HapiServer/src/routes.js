const {
  tampilkanData,
  simpanData,
  tampilkanDataById,
  hapusDatabyId,
  ubahDataById,
} = require('./handler');

const routeHapi = [
  {
    method: 'GET',
    path: '/notes',
    handler: tampilkanData,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: simpanData,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: tampilkanDataById,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: ubahDataById,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: hapusDatabyId,
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) =>
      'Halaman tidak dapat diakses dengan method tersebut',
  },
];

module.exports = routeHapi;
