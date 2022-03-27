import { mount, RouterLinkStub } from '@vue/test-utils'
import userEmergencia from '@/pages/paciente/emergencia.vue'

// Mount wrapper with custom props
const wrapper = mount(userEmergencia, {
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Emergency', () => {
	it('banner', () => {
		const item = wrapper.find('.hero-banner')
		expect(item.exists()).toBe(true)
	})

	it('registration', () => {
		const item = wrapper.find('.registration')
		expect(item.exists()).toBe(true)
	})
})
