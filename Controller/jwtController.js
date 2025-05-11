// routes/userRoutes.js or wherever your routes are
const jwt = require('jsonwebtoken');

exports.generateJwt = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send({ message: 'Email is required' });
  }

  const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '1h',
  });

  res.send(token);
};
