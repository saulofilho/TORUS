module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'rules': {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  'extends': "eslint:recommended",
  "extends": [
    "p5js"
    "p5js/dom"
    "p5js/sound"
  ],
};
