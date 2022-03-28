<template>
	<div class="content-page">
		<section>
			<div class="container">
				<h1 class="title title-line">Pedidos de emergência</h1>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum doloribus consequatur debitis molestiae
					accusantium sequi.
				</p>

				<ul>
					<li v-for="(item, i) in list" :key="i">
						<div>
							<strong>Lucia Maria</strong>
							<p>
								{{ item._id }} • <strong>{{ item.updated_at }}</strong>
							</p>
						</div>
						<div>
							<button class="bt-confirm" @click.prevent="confirm(item._id)">Aceitar</button>
							<button class="bt-cancel" @click.prevent="cancel(item._id)">Recusar</button>
						</div>
					</li>
				</ul>
			</div>
		</section>

		<p v-if="success.confirm || success.cancel" class="success">
			<template v-if="success.confirm">Emergência aceita, enviaremos uma ambulância!</template>
			<template v-else-if="success.cancel">Emergência recusada!</template>
		</p>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '@/plugins/pages'

@Component
export default class hospitalHome extends Page {
	list = []

	error = false

	success = {
		confirm: false,
		cancel: false,
	}

	auth = {
		username: 'analista@hmv.com.br',
		password: '1234abc@',
	}

	created() {
		this.getList()
	}

	getList() {
		this.error = false

		this.$axios
			.$get('/emergencies', {
				auth: this.auth,
			})
			.then((response: any) => {
				this.list = response
			})
			.catch(() => {
				this.error = true
			})
	}

	confirm(id: string) {
		this.$axios
			.$patch(
				'/emergencies/' + id + '/send-ambulance',
				{},
				{
					auth: this.auth,
				}
			)
			.then(() => {
				this.success.confirm = true
				this.getList()

				setTimeout(() => {
					this.success.confirm = false
				}, 5000)
			})
			.catch(() => {
				this.error = true
			})
	}

	cancel(id: string) {
		this.$axios
			.$patch(
				'/emergencies/' + id + '/cancel',
				{},
				{
					auth: this.auth,
				}
			)
			.then(() => {
				this.success.cancel = true
				this.getList()

				setTimeout(() => {
					this.success.cancel = false
				}, 5000)
			})
			.catch(() => {
				this.error = true
			})
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

		ul {
			margin-top: 15px;

			li {
				background-color: #fff;
				box-shadow: 0 4px 16px rgba(2, 82, 140, 0.1);
				display: inline-block;
				margin-top: 15px;
				padding: 15px;
				width: calc(100% - 30px);

				div {
					float: left;
					width: 70%;

					+ div {
						width: 30%;
					}

					> strong {
						font-size: 1.4rem;
					}
				}

				strong {
					color: $title;
				}

				button {
					background-color: $emergency;
					border-radius: 30px;
					color: #fff;
					cursor: pointer;
					display: block;
					float: right;
					font: 300 0.8rem 'Montserrat';
					margin: 13px auto 0;
					padding: 5px 15px;
					text-transform: uppercase;
					transition: background 0.2s ease;

					&:first-child {
						background-color: green;
						margin-left: 10px;
					}

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
	}
}
.success {
	background-color: #fff;
	bottom: 0;
	font-size: 1.3rem;
	padding: 30px;
	position: fixed;
	text-align: center;
	width: calc(100% - 60px);
}
</style>
