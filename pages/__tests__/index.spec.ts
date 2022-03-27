import { mount, RouterLinkStub } from '@vue/test-utils'
import login from '@/pages/index.vue'

// Mount wrapper with custom props
const wrapper = mount(login, {
	stubs: {
		NuxtLink: RouterLinkStub,
	},
})

describe('Login', () => {
	it('action', () => {
		const bt = wrapper.findComponent(RouterLinkStub)
		expect(bt.exists()).toBe(true)
	})
})
