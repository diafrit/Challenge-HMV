import { mount } from '@vue/test-utils'
import hospitalHome from '@/pages/hospital.vue'

const list = [
	{
		name: 'Lucia Maria dos Santos',
		birthDate: '20/11/1950',
		address: 'Lorem ipsum dolor, 123 - amet color - SP',
		request: '20:54h',
	},
]

// Mount wrapper with custom props
const wrapper = mount(hospitalHome, {
	data: () => {
		return {
			list,
		}
	},
})

describe('Hospital', () => {
	it('list', () => {
		const item = wrapper.findAll('li')
		expect(item.length).toBe(1)

		for (let i = 0; i < list.length; i++) {
			expect(item.at(i)!.find('.bt-confirm').exists()).toBe(true)
			expect(item.at(i)!.find('.bt-cancel').exists()).toBe(true)
		}
	})
})
