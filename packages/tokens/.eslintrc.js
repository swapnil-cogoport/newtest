module.exports = {
  parser        : '@typescript-eslint/parser',
  extends       : ['@cogoport/eslint-config/react', 'airbnb-typescript'],
  plugins       : ['@typescript-eslint'],
  parserOptions : {
    project         : './tsconfig.json',
    tsconfigRootDir : __dirname,
  },
  ignorePatterns: ['dist/**/*'],
};
