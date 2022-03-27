<template>
	<form>
		<template v-for="(input, i) in Object.keys(value)">
			<custom-field
				v-if="value[input].options && value[input].options.length"
				:id="name + '.' + input"
				:key="name + value[input].val + i"
				v-model="value[input].val"
				:grid="value[input].grid"
				type="select"
				:options="value[input].options"
				:label="value[input].title"
			/>

			<custom-field
				v-else
				:id="name + '.' + input"
				:key="name + value[input].val + i"
				v-model="value[input].val"
				:grid="value[input].grid"
				:label="value[input].title"
			/>
		</template>
	</form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import customField from '@/components/customField.vue'

@Component({
	components: {
		customField,
	},
})
export default class customForm extends Vue {
	@Prop() value!: any // Form value
	@Prop() name!: string // Form name
}
</script>
