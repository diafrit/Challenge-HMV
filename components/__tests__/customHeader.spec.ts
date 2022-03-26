import { mount, RouterLinkStub } from '@vue/test-utils'
import customHeader from '@/components/customHeader.vue'

const nav = {
	profile: {
		name: 'Lucia Maria',
		role: 'Paciente',
		type: 'user',
	},
	menu: [
		{
			text: 'Home',
			link: '/paciente',
		},
		{
			text: 'Cadastro',
			link: '/paciente/cadastro',
		},
		{
			text: 'Emergência',
			link: '/paciente/emergencia',
		},
	],
}

// Mount wrapper with custom props
const wrapper = mount(customHeader, {
	propsData: {
		value: nav,
	},
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Header', () => {
	it('nav', () => {
		const item = wrapper.findAll('nav li')

		expect(item.length).toBe(3)
		for (let i = 0; i < nav.menu.length; i++) {
			expect(item.at(i).text()).toBe(nav.menu[i].text)
		}
	})

	it('profile', () => {
		const profile = wrapper.find('.header-profile')

		expect(profile.find('strong').text()).toBe(nav.profile.name)
		expect(profile.find('small').text()).toBe(nav.profile.role)
	})
})
