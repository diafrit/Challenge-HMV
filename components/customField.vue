<template>
	<div :class="['field', grid ? 'grid-' + grid : '', { select: type == 'select' }]">
		<select
			v-if="type == 'select'"
			:ref="id"
			:class="{ 'input-filled': value }"
			:name="id"
			:disabled="disabled"
			:value="value"
			@input="$emit('input', $event.target.value)"
			@blur="$emit('blur', $event.target.value)"
		>
			<option v-for="option in options" :key="option.text" :value="option.value">{{ option.text }}</option>
		</select>

		<input
			v-else
			:ref="id"
			:class="{ 'input-filled': value || value === 0 }"
			:name="id"
			type="text"
			:readonly="disabled"
			:disabled="disabled"
			:value="value"
			@input="$emit('input', $event.target.value)"
			@blur="$emit('blur', $event.target.value)"
			@keyup="$emit('keyup', $event.target.value)"
		/>

		<label :for="id">{{ label }}</label>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class customField extends Vue {
	@Prop() grid!: number // CSS grid size

	@Prop() id!: string // Field id
	@Prop() value!: any // Field value
	@Prop() type!: string // Field type
	@Prop() disabled!: boolean // Field disable status
	@Prop({ default: '' }) label!: string // Label
	@Prop() options!: string[] | [] // Field select
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/grid.scss';

.field {
	margin-bottom: 5px;
	margin-top: 10px;
	position: relative;
	transition: all 0.3s ease;

	@media (max-width: 1080px) {
		margin-top: 15px;
	}

	input,
	select {
		background: none;
		border: 1px $gray solid;
		border-radius: 3px;
		box-sizing: border-box;
		color: $default;
		font: 400 16px/17px 'Montserrat';
		padding: 15px 10px 9px;
		position: relative;
		transition: color 0.3s ease, padding 0.3s ease;
		width: 100%;
		z-index: 2;

		+ label {
			color: $gray;
			left: 0;
			padding: 9px 15px;
			position: absolute;
			top: 0;
			transition: all 0.3s ease;
		}

		&:focus,
		&.input-error,
		&.input-filled {
			+ label {
				font-size: 12px;
				left: 16px;
				padding: 0;
				top: -3px;
			}
		}

		&:disabled {
			border-color: #ddd;
			cursor: default;
		}
	}

	select {
		appearance: none;
		-webkit-appearance: none;
		padding-right: 26px;

		&::-ms-expand {
			display: none;
		}
	}

	&.select {
		&:after {
			color: $title;
			content: '\203A';
			display: inline-block;
			font-size: 20px;
			margin-top: -12px;
			position: absolute;
			right: 15px;
			transform: rotate(90deg);
			top: 50%;
		}
	}
}
</style>
