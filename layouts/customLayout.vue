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
		user: 'af3ecfbc-0e18-4448-875a-d64744a1f5cd',
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
				link: '/paciente/cadastro',
			},
			{
				text: 'Emergência',
				link: '/paciente/emergencia',
			},
		],
	}

	// Rescuer profile
	socorrista = {
		user: '16674382-3430-414e-b429-0e847999ca8e',
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
		user: '6d763219-d191-4970-85cf-5abeab25f9c4',
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
		this.area = (this as any)[route]

		this.$store.commit('setUser', this.area.user)
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
