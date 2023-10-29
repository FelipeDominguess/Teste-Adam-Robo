const Dotenv = require('dotenv-webpack');

module.exports = {
  // outras configurações do seu webpack...
  plugins: [
    new Dotenv()
  ]
};
