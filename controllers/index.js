import { users } from '../mocks.js';

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === id);
  res.json(user);
};

export { getAllUsers, getUserById };
