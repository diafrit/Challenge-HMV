<template>
	<div class="content-page">
		<section>
			<div class="container">
				<h1 class="title title-line">Emergência ativa</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum doloribus consequatur debitis molestiae
					accusantium sequi.
				</p>
				<custom-form v-model="user" name="user" />

				<p>
					Facilis, necessitatibus deserunt quo fuga deleniti culpa impedit harum ad quibusdam qui. Doloremque molestiae,
					impedit explicabo exercitationem, deleniti quibusdam rerum autem fugit!
				</p>
				<custom-form v-model="emergency" name="emergency" />

				<button>Enviar</button>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '@/plugins/pages'
import customField from '@/components/customField.vue'
import customForm from '@/components/customForm.vue'
const userData = require('@/content/user.json')
const emergencyData = require('@/content/emergency.json')

@Component({
	components: {
		customField,
		customForm,
	},
})
export default class rescuerHome extends Page {
	user = userData
	emergency = emergencyData
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
