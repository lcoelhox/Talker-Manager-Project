const validateTalk = (req, res, next) => {
  const talkBody = req.body;
  if (!talkBody.talk) return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  if (!talkBody.talk.watchedAt) {
     return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!talkBody.talk.rate && talkBody.talk.rate !== 0) {
     return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
   return next();
};

module.exports = validateTalk;
