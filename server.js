import express from 'express';

import { getAllUsers, getUserById } from './controllers/index.js';

const port = 3000;

const app = express();
app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});

app.get('/api/users', getAllUsers);

app.get('/api/users/:id', getUserById);

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
