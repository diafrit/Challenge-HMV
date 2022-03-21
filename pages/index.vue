<template>
	<section>
		<div class="action">
			<div class="login">
				<img src="~/assets/img/logo-hmv2.png" alt="Hospital Moinhos de Vento" />

				<custom-field
					id="profile"
					v-model="active"
					grid="12"
					type="select"
					:options="profile"
					label="Selecione o perfil"
				/>

				<nuxt-link :to="'/' + active">Acessar</nuxt-link>
			</div>
		</div>
		<div class="illustration" />
	</section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Base } from '~/plugins/pages'

@Component
export default class login extends Base {
	profile = [
		{ value: 'usuario', text: 'Usuário' },
		{ value: 'socorrista', text: 'Socorrista' },
		{ value: 'hospital', text: 'Hospital' },
	]

	active = ''
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

section {
	height: 100%;
	overflow: hidden;
	position: absolute;
	width: 100%;

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

	> div {
		height: 89%;
		margin: 5%;
		position: absolute;
		top: 0;
		width: 40%;

		&.action {
			background-color: #fff;
			left: 0;
			margin: 0;
			padding: 5%;
		}

		&.illustration {
			background: url(~/assets/img/login-illustration.png) no-repeat center center;
			background-size: contain;
			right: 0;
		}

		@media (max-width: 780px) {
			&.action {
				background: none;
				width: 90%;
			}

			&.illustration {
				display: none;
			}
		}
	}
}

.login {
	display: inline-block;
	left: 50%;
	position: absolute;
	top: 20%;
	transform: translateX(-50%);

	img {
		display: block;
		margin: 0 auto 30px;
		width: 70%;
	}

	p {
		color: $title;
		font-size: 1.4rem;
	}

	.field {
		float: none;
		margin: 0 auto 30px;
	}

	a {
		background-color: $emergency;
		border-radius: 100px;
		color: $bg;
		display: inline-block;
		left: 50%;
		padding: 5px 45px;
		position: relative;
		text-align: center;
		transform: translateX(-50%);
		transition: all 0.3s ease;

		&:hover {
			opacity: 0.8;
		}
	}
}
</style>
