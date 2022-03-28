<template>
	<div>
		<section class="hero-banner">
			<div class="container">
				<div>
					<h1 class="title">Adipisicing <span>emergência</span> und libero deleniti</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis enim magni laudantium libero deleniti
						temporibus minus iste molestias. Quisquam?
					</p>
					<p>Quod incidunt veniam ex quibusdam!</p>
				</div>
				<img src="~/assets/img/emergency-illustration.png" alt="Hospital Moinhos de Vento" />
			</div>
		</section>

		<section class="action">
			<div>
				<a href="#" title="Solicitar atendimento" @click.prevent="createEmergency">Chamada de emergência</a>
			</div>

			<p v-if="error">Ocorreu um erro na requisição, por favor tente novamente.</p>
		</section>

		<section class="registration">
			<div class="container">
				<h3>Mantenha seus dados atualizados</h3>
				<nuxt-link to="/paciente/cadastro" title="Atualizar dados">Atualizar</nuxt-link>
				<p>
					Lorem ipsum dolor {{ percentage }}% sit amet consectetur adipisicing elit. Placeat, enim est vitae quisquam
					illo.
				</p>

				<div class="bar">
					<span :style="{ width: percentage + '%' }" />
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '@/plugins/pages'

@Component
export default class userHome extends Page {
	percentage: number = 70
	error = false

	createEmergency() {
		this.error = false

		this.$axios
			.$post(
				'/emergencies',
				{},
				{
					auth: {
						username: 'paciente@teste.com',
						password: '1234abc@',
					},
				}
			)
			.then((response: any) => {
				this.$store.commit('setEmergency', response._id)
				this.$router.push({ path: '/paciente/emergencia' })
			})
			.catch(() => {
				this.error = true
			})
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.hero-banner {
	.container {
		&:before {
			background: url(~assets/img/hero-bg.png) no-repeat 0 0;
			background-size: contain;
			content: '';
			display: block;
			height: 550px;
			left: calc(50% - 495px);
			position: absolute;
			top: 0;
			width: 1177px;
			z-index: 0;
		}

		div {
			float: left;
			padding: 70px 0;
			position: relative;
			width: 50%;
			z-index: 1;

			p {
				margin-top: 15px;
			}
		}

		img {
			float: right;
			margin: 4% 12% 0 0;
			max-width: 610px;
			position: relative;
			width: 23%;
			z-index: 1;
		}

		@media (max-width: 980px) {
			div {
				display: block;
				float: none;
				padding: 30px 0;
				text-align: center;
				width: auto;
			}

			img {
				display: block;
				float: none;
				margin: 0 auto 60px;
				width: 40%;
			}
		}
	}
}

.action {
	div {
		border-radius: 100px;
		box-shadow: 0 5px 30px rgba(0, 0, 0, 0.4);
		display: block;
		margin: 30px auto 0;
		max-width: 720px;
		width: 90%;

		a {
			animation: pulse 1.75s infinite cubic-bezier(0.66, 0, 0, 1);
			background-color: $emergency;
			border-radius: 100px;
			box-shadow: 0 0 0 0 rgba(226, 0, 27, 0.7);
			color: $bg;
			display: block;
			font-size: 2.1rem;
			letter-spacing: -1px;
			line-height: 1.1;
			padding: 45px;
			overflow: hidden;
			position: relative;
			text-align: center;
			text-transform: uppercase;

			@media (max-width: 620px) {
				font-size: 1.5rem;
			}
		}
	}

	p {
		color: $emergency;
		font-size: 1.3rem;
		margin-top: 30px;
		text-align: center;
	}

	@keyframes pulse {
		to {
			box-shadow: 0 0 0 45px rgba(226, 0, 27, 0);
		}
	}
}

.registration {
	background-color: #fff;
	margin-top: 120px;
	padding: 60px 0;

	h3 {
		color: $title;
		font-size: 2rem;
	}

	p {
		margin-top: 15px;
	}

	a {
		background-color: $title;
		border-radius: 20px;
		color: #fff;
		float: right;
		margin-top: -28px;
		padding: 5px 25px;
		transition: background 0.2s ease;

		&:hover {
			background-color: $gray;
		}

		@media (max-width: 730px) {
			display: inline-block;
			float: none;
			margin-top: 15px;
		}
	}

	$bar-size: 7px;
	.bar {
		background-color: $gray;
		border-radius: 20px;
		display: inline-block;
		height: $bar-size;
		overflow: hidden;
		position: relative;
		width: 100%;

		span {
			background-color: $title;
			float: left;
			height: $bar-size;
		}
	}
}
</style>
