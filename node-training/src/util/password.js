const bcrypt = require("bcrypt");
const saltRounds = 10;

const encryptPassword = (password) => {
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = {
  encryptPassword,
  comparePassword,
};
