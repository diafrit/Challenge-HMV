<template>
	<div>
		<section class="hero-banner">
			<div class="container">
				<div>
					<h1>Ambulância <span>HMV</span> a caminho!</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis enim magni laudantium libero deleniti
						temporibus minus iste molestias. Quisquam?
					</p>
					<p>Quod incidunt veniam ex quibusdam!</p>
				</div>
				<img src="~/assets/img/hero-illustration.png" alt="Hospital Moinhos de Vento" />
			</div>
		</section>

		<section class="registration">
			<div class="container">
				<h3><span>Agilize o atendimento</span> preenchendo algumas informações</h3>
				<p>
					Lorem ipsum dolor {{ percentage }}% sit amet consectetur adipisicing elit. Placeat, enim est vitae quisquam
					illo.
				</p>

				<form>
					<custom-field id="user.name" v-model="user.name" grid="9" label="Nome" />
					<custom-field id="user.birthDate" v-model="user.birthDate" grid="3" label="Nascimento" />
					<custom-field id="user.address" v-model="user.address" grid="10" label="Logradouro" />
					<custom-field id="user.number" v-model="user.number" grid="2" label="Número" />
					<custom-field id="user.city" v-model="user.city" grid="8" label="Cidade" />
					<custom-field id="user.state" v-model="user.state" grid="4" label="Estado" />
				</form>
				<button>Salvar</button>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '~/plugins/pages'

@Component
export default class userEmergencia extends Page {
	user = {
		name: 'lorem ipsum dor sit',
		birthDate: '05/05/1950',
		address: 'Rua possimus quas ullam',
		number: '123',
		city: 'Repellendus',
		state: 'Iste quod',
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

			h1 {
				color: $title;
				font-size: 3rem;
				line-height: 1.3;
				margin-bottom: 15px;

				span {
					color: $emergency;
				}
			}

			p {
				margin-top: 15px;
			}
		}

		img {
			float: right;
			margin: 4% 4% 0 0;
			max-width: 610px;
			position: relative;
			width: 46%;
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
				margin: 0 auto;
				width: 90%;
			}
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

		span {
			color: $emergency;
		}
	}

	p {
		margin-top: 15px;
	}

	form {
		display: inline-block;
		margin: 60px 10%;
		width: 80%;

		@media (max-width: 620px) {
			margin-left: 0;
			margin-right: 0;
			width: 100%;
		}
	}

	button {
		background-color: $title;
		border-radius: 30px;
		color: #fff;
		cursor: pointer;
		display: block;
		font: 300 1rem 'Montserrat';
		margin: 0 auto;
		padding: 7px 35px;
		text-transform: uppercase;
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
}
</style>
