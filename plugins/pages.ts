import { Component, Vue } from 'nuxt-property-decorator'

const commonHead = {
	meta: [
		{
			name: 'charset',
			content: 'utf-8',
		},
		{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
		},

		{
			vmid: 'description',
			name: 'description',
			content: 'Aplicação de chamada de emergências para o Hospital Moinhos de Vento - FIAP @ Challenge Grupo 3',
		},
		{ vmid: 'theme-color', name: 'theme-color', content: '#fff' },
		{ vmid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#fff' },
	],

	link: [
		{ rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png', sizes: '180x180' },
		{ rel: 'icon', href: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		{ rel: 'icon', href: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
		{ rel: 'manifest', href: '/favicon/site.webmanifest' },
	],
}

@Component
export class Page extends Vue {
	layout() {
		return 'customLayout'
	}

	head() {
		return {
			titleTemplate: '%s Hospital Moinhos de Vento',

			meta: commonHead.meta,
			link: commonHead.link,
		}
	}
}
