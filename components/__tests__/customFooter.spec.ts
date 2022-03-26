import { mount, RouterLinkStub } from '@vue/test-utils'
import customFooter from '@/components/customFooter.vue'

// Mount wrapper with custom props
const wrapper = mount(customFooter, {
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Footer', () => {
	it('logo', () => {
		const logo = wrapper.findComponent(RouterLinkStub)
		expect(logo.classes()).toContain('header-logo')
	})

	it('copyright', () => {
		const logo = wrapper.find('p')
		expect(logo.text()).toContain('2022 - Challenge Hospital Moinhos de Vento - 6AOJO, 3ABDO e 2SCJO - Grupo 3')
	})
})
