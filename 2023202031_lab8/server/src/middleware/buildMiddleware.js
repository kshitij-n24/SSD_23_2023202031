import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const buildMiddleware = (app) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const root = path.join(__dirname, '../../../client/build');
  app.use(express.static(root));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
  });

  app.use((req, res) => {
    if (!req.path.includes('.')) {
      res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
    }
  });

  return app;
};

export default buildMiddleware;
