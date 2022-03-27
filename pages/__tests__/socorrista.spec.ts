import { mount } from '@vue/test-utils'
import rescuerHome from '@/pages/socorrista.vue'

// Mount wrapper with custom props
const wrapper = mount(rescuerHome)

describe('Rescuer', () => {
	it('forms', () => {
		const forms = wrapper.findAll('form')
		expect(forms.length).toBe(2)

		const bt = wrapper.findAll('button')
		expect(bt.exists()).toBe(true)
	})
})
