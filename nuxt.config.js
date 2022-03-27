export default {
	buildModules: ['@nuxt/typescript-build'],
	typescript: {
		typeCheck: {
			eslint: {
				files: './**/*.{ts,js,vue}',
			},
		},
	},
	modules: ['@nuxtjs/axios'],
	components: true,
	axios: {
		baseURL: 'https://iojekrmlq3.execute-api.us-east-1.amazonaws.com/prod',
	},
}
