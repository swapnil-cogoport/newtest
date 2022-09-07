module.exports = {
	extends       : ['@cogoport/eslint-config/react-typescript'],
	parserOptions : {
		project         : './tsconfig.json',
		tsconfigRootDir : __dirname,
	},
	ignorePatterns : ['dist/**/*'],
	rules          : {
		'react/require-default-props': 'off',
	},
};
