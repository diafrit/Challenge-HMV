<template>
	<div>
		<custom-header v-model="area" />

		<transition name="fade" mode="out-in">
			<main>
				<nuxt />
			</main>
		</transition>

		<custom-footer />
	</div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class customLayout extends Vue {
	// User profile
	paciente = {
		profile: {
			name: 'Lucia Maria',
			role: 'Paciente',
			type: 'user',
		},
		menu: [
			{
				text: 'Home',
				link: '/paciente',
			},
			{
				text: 'Cadastro',
				link: '/paciente/dados',
			},
			{
				text: 'Emergência',
				link: '/paciente/emergencia',
			},
		],
	}

	// Rescuer profile
	socorrista = {
		profile: {
			name: 'João Silva',
			role: 'Socorrista',
			type: 'rescuer',
		},
		menu: [
			{
				text: 'Emergências',
				link: '/socorrista',
			},
		],
	}

	// Support profile
	hospital = {
		profile: {
			name: 'HMV',
			role: 'Suporte',
			type: 'hospital',
		},
		menu: [
			{
				text: 'Solicitações',
				link: '/hospital',
			},
		],
	}

	// Active profile
	area: any = {}

	created() {
		this.router()
	}

	// Update profile header on route change
	@Watch('$nuxt.$route')
	router() {
		const route = this.$nuxt.$route.name ? this.$nuxt.$route.name.split('-')[0] : 'paciente'
		this.area = this[route]
	}
}
</script>

<style lang="scss">
@import '@/assets/scss/base.scss';
.page-enter-active,
.page-leave-active {
	transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
	opacity: 0;
}
</style>
