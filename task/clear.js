const del = require("del");

// Удаление директории
const clear = () => {
  return del("./public", !"./public/fonts");
};

module.exports = clear;
