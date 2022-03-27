<template>
	<div class="content-page">
		<section class="user-data">
			<div class="container">
				<h1 class="title title-line">Lucia Maria</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Necessitatibus, quod reprehenderit reiciendis
					similique voluptatibus inventore porro eveniet esse autem, itaque quidem sapiente doloremque delectus repellat
					quas enim beatae officiis nam repudiandae, exercitationem officia, repellendus consequuntur iste. Aspernatur
					sit magni, libero!
				</p>

				<custom-form v-model="user" name="user" />
				<img src="~/assets/img/data-illustration.png" alt="Hospital Moinhos de Vento" />

				<button>Atualizar</button>
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

@Component({
	components: {
		customField,
		customForm,
	},
})
export default class pacientData extends Page {
	user = userData
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

form {
	background-color: #fff;
	box-sizing: border-box;
	display: inline-block;
	margin-top: 30px;
	padding: 30px;
	width: 60%;
}

img {
	float: right;
	margin-top: 30px;
	width: 35%;
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
</style>
