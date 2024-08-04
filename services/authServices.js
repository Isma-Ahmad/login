const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

// -----------Sign-up--------- 
exports.signUp = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.User.create({ username, password: hashedPassword });
};

// -----------Login---------
exports.login = async (username, password) => {
  const user = await db.User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user.id, username: user.username }, process.env.SECRET_KEY || 'secret_key', { expiresIn: '1h' });
  return { token };
};

// -----------Update user---------
exports.updateUser = async (userId, username, password) => {
  const user = await db.User.findByPk(userId);
  if (!user) return null;

  if (username) user.username = username;
  if (password) user.password = await bcrypt.hash(password, 10);

  await user.save();
  return user;
};
