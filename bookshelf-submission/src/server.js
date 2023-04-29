require('dotenv').config();
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const { PORT, HOST } = process.env.PORT;

const init = async () => {
  const server = Hapi.server({
    port: PORT || 9000,
    host: HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan: ${server.info.uri}`);
};

init();
