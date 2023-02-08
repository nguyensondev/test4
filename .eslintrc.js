module.exports = {
	root: true,
	extends: 'eslint:recommended',
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', "autofix"],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['warn'],
				"@typescript-eslint/no-unused-vars": "warn",				
				'no-shadow': 'off',
				"no-unused-vars": "off",
				'no-undef': 'off',
			},
		},
	],
};