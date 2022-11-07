const express = require('express');

const router = express.Router();

const {
  readFile,
  writeFile,
  idNew,
  talkChange,
  talkDelete,
  talkSearch,
} = require('../utils');

const validateToken = require('../middlewares/validateToken');
const validateName = require('../middlewares/validateName');
const validateAge = require('../middlewares/validateAge');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedat = require('../middlewares/validateWatchedAt');
const validateRate = require('../middlewares/validateRate');

router.get('/search', validateToken, async (req, res) => {
  const querry = req.query.q;
  try {
    if (!querry || querry.length === 0) {
      const allTalkers = await readFile();
      return res.status(200).json(allTalkers);
    }
    const searchTalkerRes = await talkSearch(querry);
    return res.status(200).json(searchTalkerRes);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.get('/', async (_req, res) => {
  try {
    const talkers = await readFile();
    return res.status(200).json(talkers);
    // if (talkers.length === 0) return res.status(200);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const talkers = await readFile();
    const talker = talkers.find((talke) => talke.id === +id);
    if (!talker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    return res.status(200).json(talker);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post(
  '/',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedat,
  validateRate,
  async (req, res) => {
    try {
      const reqTalker = req.body;
      const talk = { id: await idNew(), ...reqTalker };
      console.log(reqTalker);
      await writeFile(talk);
      return res.status(201).json(talk);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
);

router.put(
  '/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedat,
  validateRate, 
  async (req, res) => {
    try {
      const idTalk = req.params.id;
      const talkerChange = req.body;
      const talk = { id: Number(idTalk), ...talkerChange };
      await talkChange(talk);
      return res.status(200).json(talk);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  },
);

router.delete('/:id', validateToken, async (req, res) => {
  const idTalk = req.params.id;
  try {
    await talkDelete(Number(idTalk));
    return res.status(204).end();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
 });

module.exports = router;