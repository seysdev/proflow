module.exports = {
  env: {
    "jest/globals": true,
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["expo", "eslint:recommended", "prettier"],
  plugins: ["prettier", "jest"],
  rules: {
    "prettier/prettier": "error",
  },
};
