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
							<strong>{{ item.name }}</strong>
							<p>
								<strong>{{ item.birthDate }}</strong> • {{ item.address }} • <strong>{{ item.request }}</strong>
							</p>
						</div>
						<div>
							<button class="bt-confirm">Aceitar</button>
							<button class="bt-cancel">Recusar</button>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '@/plugins/pages'

@Component
export default class hospitalHome extends Page {
	list = [
		{
			name: 'Lucia Maria dos Santos',
			birthDate: '20/11/1950',
			address: 'Lorem ipsum dolor, 123 - amet color - SP',
			request: '20:54h',
		},
	]
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
</style>
