import fs from 'fs';
import path from 'path';
import express from 'express';

export const spaController = express.Router();

spaController.all('*', (_req, res) => {
  const result = fs.readFileSync(
    path.resolve(__dirname, '..', '..', 'public', 'index.html'),
    'utf-8',
  );
  res.send(result);
});
