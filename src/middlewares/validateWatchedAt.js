const validateWatchedat = (req, res, next) => {
  const WatchedatBody = req.body.talk.watchedAt;
  const validateDateRegex = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  // if (!WatchedatBody) return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  if (!validateDateRegex.test(WatchedatBody)) { 
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  return next();
};

module.exports = validateWatchedat;