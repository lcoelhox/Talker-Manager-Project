const fs = require('fs').promises;
const path = require('path');

const talkerPath = path.resolve(__dirname, './talker.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(talkerPath);
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.log(`Arquivo não pode ser lido: ${error}`);
  }
};

const writeFile = async (talk) => {
  const file = await readFile();
  await fs.writeFile(
  talkerPath,
  JSON.stringify([...file, talk]),
  );
};

const idNew = async () => {
  const file = await readFile();
  const idMaximus = Math.max(...file.map(({ id }) => id));
  return idMaximus + 1;
};

const talkChange = async (talk) => {
  const file = await readFile();
  const fileChange = file.map((talker) => {
    if (talker.id === talk.id) return talk;
    return talker;
  });
  await fs.writeFile(talkerPath, JSON.stringify(fileChange));
};

const talkDelete = async (id) => {
  const file = await readFile();
  const removeTalk = file.filter((talker) => talker.id !== id);
  await fs.writeFile(talkerPath, JSON.stringify(removeTalk));
};

const talkSearch = async (name) => {
  const file = await readFile();
  const searchTalk = file.filter((talker) => talker.name.includes(name));
  return searchTalk;
};

module.exports = {
  readFile,
  writeFile,
  idNew,
  talkChange,
  talkDelete,
  talkSearch,
};
