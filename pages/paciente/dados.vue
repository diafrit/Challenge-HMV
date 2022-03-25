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

				<form>
					<custom-field id="user.name" v-model="user.name" grid="9" label="Nome" />
					<custom-field id="user.birthDate" v-model="user.birthDate" grid="3" label="Nascimento" />
					<custom-field id="user.address" v-model="user.address" grid="10" label="Logradouro" />
					<custom-field id="user.number" v-model="user.number" grid="2" label="Número" />
					<custom-field id="user.city" v-model="user.city" grid="8" label="Cidade" />
					<custom-field id="user.state" v-model="user.state" grid="4" label="Estado" />
				</form>

				<img src="~/assets/img/data-illustration.png" alt="Hospital Moinhos de Vento" />

				<button>Atualizar</button>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '~/plugins/pages'

@Component
export default class userData extends Page {
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
