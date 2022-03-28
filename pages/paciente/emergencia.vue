<template>
	<div>
		<section class="hero-banner">
			<div class="container">
				<div>
					<h1>A <span>ajuda</span> está a caminho!</h1>
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
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, enim est vitae quisquam illo.</p>

				<custom-form v-model="emergency" name="emergency" />

				<p v-if="success" class="msg">Cadastro atualizado com sucesso</p>
				<p v-else-if="error" class="msg error">Ocorreu um erro na sua requisição, por favor tente novamente</p>
				<button v-else @click.prevent="updateEmergency">Salvar</button>
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
export default class userEmergencia extends Page {
	user = userData
	emergency = emergencyData

	success = false
	error = false

	updateEmergency() {
		this.$axios
			.$put(
				'/emergencies/' + this.$store.state.emergencyID + '/form',
				{
					headache: {
						has: !!this.emergency.headache.val,
						intensity: this.emergency.headacheIntensity.val,
					},
					breathing_difficulties: {
						has: !!this.emergency.breathe.val,
					},
					chest_pain: {
						has: !!this.emergency.chestpain.val,
						characteristics: this.emergency.chestpainInfo.val,
					},
					abdominal_pain: {
						has: !!this.emergency.abdominal.val,
						intensity: this.emergency.abdominalIntensity.val,
					},
					backache: {
						has: !!this.emergency.backpain.val,
					},
					body_temperature: {
						celsius_degrees: parseFloat(this.emergency.temperature.val),
					},
					blood_pressure: {
						systolic: parseFloat(this.emergency.bloodpressureSystolic.val),
						diastolic: parseFloat(this.emergency.bloodpressureDiastolic.val),
					},
					oxygen_saturation: {
						value: parseFloat(this.emergency.saturation.val),
					},
				},
				{
					auth: {
						username: 'paciente@teste.com',
						password: '1234abc@',
					},
				}
			)
			.then(() => {
				this.success = true
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
	margin-top: 30px;
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

	.msg {
		font-size: 1.3rem;
		text-align: center;

		&.error {
			color: $emergency;
		}
	}
}
</style>
