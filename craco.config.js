// craco.config.js
// const cssNext = require("postcss-cssnext");
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("postcss-cssnext")],
    },
  },
};
