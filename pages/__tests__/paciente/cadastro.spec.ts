import { mount, RouterLinkStub } from '@vue/test-utils'
import pacientData from '@/pages/paciente/cadastro.vue'

// Mount wrapper with custom props
const wrapper = mount(pacientData, {
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Pacient data', () => {
	it('user-data', () => {
		const item = wrapper.find('.user-data')
		expect(item.exists()).toBe(true)
	})

	it('action', () => {
		const item = wrapper.find('button')
		expect(item.exists()).toBe(true)
	})
})
