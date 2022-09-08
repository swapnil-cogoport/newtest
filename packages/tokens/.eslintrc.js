module.exports = {
	extends        : ['@cogoport/eslint-config/react-typescript'],
	ignorePatterns : ['dist/**/*', '!.stylelintrc.js'],
	parserOptions  : { project: './tsconfig.json', tsconfigRootDir: __dirname },
};
