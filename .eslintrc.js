module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'eslint:recommended',
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['vue'],
	rules: {
		'vue/no-v-html': 'off',
		'vue/html-indent': 'off', // prettier takes care of indentation
		'prettier/prettier': 'error',
		'vue/v-on-function-call': 'error',
	},
}
