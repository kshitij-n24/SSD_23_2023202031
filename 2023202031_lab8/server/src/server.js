import * as dotenv from 'dotenv';
import makeApp from './app.js';

dotenv.config();

const server = async () => {
  const app = await makeApp();
  const port = process.env.SERVER_PORT || 8080;

  app.listen(port, () => {
    console.log(`The server is running on port: ${port}`);
  });
};

export default server;

server();
