module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["node"],
  "rules": {
    "node/no-unsupported-features": ["error", {"version": 6}],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true
      }
    ]
  },
  "env": {
    "node": true
  }
};
