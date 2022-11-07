const validateRate = (req, res, next) => {
  const rateBody = req.body;
  if (
    !Number.isInteger(rateBody.talk.rate) 
    || Number.isNaN(rateBody.talk.rate)
    || rateBody.talk.rate < 1
    || rateBody.talk.rate > 5
    ) return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
   return next();
};

module.exports = validateRate;