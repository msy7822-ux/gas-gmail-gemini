// src/index.ts
import * as functions from '@google-cloud/functions-framework';

functions.http('api', (req, res) => {
  res.status(200).send('tempura');
});
