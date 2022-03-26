module.exports = {
	verbose: true,
	testURL: 'http://localhost/',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	transform: {
		'^.+\\.ts?$': 'ts-jest',
		'.*\\.(vue)$': 'vue-jest',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
			diagnostics: {
				ignoreCodes: ['2307'],
			},
		},
	},
	moduleFileExtensions: ['js', 'jsx', 'json', 'vue', 'ts', 'tsx'],

	collectCoverageFrom: [
		'components/**/*.vue',
		'layouts/**/*.vue',
		'pages/**/*.vue',
		'lib/**/*.ts',
		'plugins/**/*.ts',
		'store/**/*.ts',
	],

	testEnvironment: 'jsdom',
}
