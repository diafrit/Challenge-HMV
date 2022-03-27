import { shallowMount } from '@vue/test-utils'
import customField from '@/components/customField.vue'

interface Props {
	id?: string // Field id
	grid?: number // CSS grid size
	value?: any // Field value
	type?: string // Field type
	disabled?: boolean // Field disable status
	label?: string // Label
	options?: any // Field select
}

// Set random ID
const id = Math.random().toString(36).slice(7)

// Mount wrapper with custom props
const wrapper = (p?: Props) => {
	return shallowMount(customField, {
		propsData: {
			id,
			value: p && p.value ? p.value : '',
			label: 'Label ' + id,
			...p,
		},
	})
}

// Elements
const e = (el: string, p?: Props) => wrapper(p).find(el)

describe('Header', () => {
	// Field container
	it('div', () => {
		expect(e('.field').exists()).toBe(true)
	})

	// Basic input element
	it('input', () => {
		const el = e('input')
		expect(el.attributes('name')).toBe(id) // Name
		expect(el.attributes('type')).toBe('text') // Field type (default)
	})

	// Field label
	it('label', () => {
		const label = {
			el: e('label'),
			span: e('label').find('span'),
		}

		expect(label.el.text()).toBe('Label ' + id) // Text
	})

	// Grid style
	it('grid', () => {
		expect(e('.field', { grid: 12 }).classes()).toContain('grid-12')
	})

	// Select field
	it('select', () => {
		const options = [
			{ value: '1', text: 'Text one' },
			{ value: '2', text: 'Text two' },
			{ value: '3', text: 'Text three' },
		]
		const el = e('select', { type: 'select', options })

		const items = el.findAll('option')
		for (let i = 0; i < options.length; i++) {
			const item = items.at(i)

			expect(item.text()).toBe(options[i].text)
			expect(item.attributes('value')).toBe(options[i].value)
		}

		expect(e('select', { type: 'select', options, disabled: true }).attributes('disabled')).toBe('disabled')
	})
})
