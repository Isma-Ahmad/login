const authService = require('../services/authServices');

// Sign-up handler
exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.signUp(username, password);
    res.status(201).json({ id: user.id, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login handler
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const { token } = await authService.login(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

// Update user data handler
exports.updateUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await authService.updateUser(req.user.id, username, password);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ id: user.id, username: user.username });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
