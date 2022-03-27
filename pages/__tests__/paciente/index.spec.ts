import { mount, RouterLinkStub } from '@vue/test-utils'
import userHome from '@/pages/paciente/index.vue'

// Mount wrapper with custom props
const wrapper = mount(userHome, {
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Pacient', () => {
	it('banner', () => {
		const item = wrapper.find('.hero-banner')
		expect(item.exists()).toBe(true)
	})

	it('action', () => {
		const item = wrapper.find('.action')
		expect(item.exists()).toBe(true)
	})

	it('registration', () => {
		const item = wrapper.find('.registration')
		expect(item.exists()).toBe(true)
	})
})
