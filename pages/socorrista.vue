<template>
	<div class="content-page">
		<section>
			<div class="container">
				<h1 class="title title-line">Emergência ativa</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum doloribus consequatur debitis molestiae
					accusantium sequi.
				</p>
				<form>
					<custom-field id="user.name" v-model="user.name" grid="9" label="Nome" :disabled="true" />
					<custom-field id="user.birthDate" v-model="user.birthDate" grid="3" label="Nascimento" :disabled="true" />
					<custom-field id="user.address" v-model="user.address" grid="10" label="Logradouro" :disabled="true" />
					<custom-field id="user.number" v-model="user.number" grid="2" label="Número" :disabled="true" />
					<custom-field id="user.city" v-model="user.city" grid="8" label="Cidade" :disabled="true" />
					<custom-field id="user.state" v-model="user.state" grid="4" label="Estado" :disabled="true" />
				</form>

				<p>
					Facilis, necessitatibus deserunt quo fuga deleniti culpa impedit harum ad quibusdam qui. Doloremque molestiae,
					impedit explicabo exercitationem, deleniti quibusdam rerum autem fugit!
				</p>
				<form>
					<custom-field id="user.name" v-model="user.name" grid="9" label="Nome" />
					<custom-field id="user.birthDate" v-model="user.birthDate" grid="3" label="Nascimento" />
					<custom-field id="user.address" v-model="user.address" grid="10" label="Logradouro" />
					<custom-field id="user.number" v-model="user.number" grid="2" label="Número" />
					<custom-field id="user.city" v-model="user.city" grid="8" label="Cidade" />
					<custom-field id="user.state" v-model="user.state" grid="4" label="Estado" />
				</form>

				<button>Enviar</button>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '~/plugins/pages'

@Component
export default class userHome extends Page {
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

section {
	.container {
		&:before {
			background: url(~assets/img/hero-bg.png) no-repeat 0 0;
			background-size: contain;
			content: '';
			display: block;
			height: 550px;
			left: calc(50% - 495px);
			position: absolute;
			top: -80px;
			width: 1177px;
			z-index: -1;
		}

		form {
			background-color: #fff;
			box-sizing: border-box;
			display: inline-block;
			margin-top: 30px;
			padding: 30px;

			+ p {
				border-top: 1px #ddd solid;
				margin-top: 30px;
				padding-top: 30px;
			}
		}

		button {
			background-color: $title;
			border-radius: 30px;
			color: #fff;
			cursor: pointer;
			display: block;
			font: 300 1rem 'Montserrat';
			margin: 30px auto 0;
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
}
</style>
