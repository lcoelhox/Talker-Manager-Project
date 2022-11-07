const validateToken = (req, res, next) => {
  const tokenBody = req.headers.authorization;
  if (!tokenBody) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (typeof tokenBody !== 'string' || tokenBody.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  return next();
};

module.exports = validateToken;
