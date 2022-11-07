const validateAge = (req, res, next) => {
  const ageBody = req.body.age;
  if (!ageBody) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (ageBody < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  return next();
};

module.exports = validateAge;