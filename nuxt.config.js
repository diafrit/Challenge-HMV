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
}
