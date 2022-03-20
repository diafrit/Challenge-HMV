<template>
	<div>
		<section class="hero-banner">
			<div class="container">
				<div>
					<h1>Adipisicing <span>emergência</span> und libero deleniti</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nobis enim magni laudantium libero deleniti
						temporibus minus iste molestias. Quisquam?
					</p>
					<p>Quod incidunt veniam ex quibusdam!</p>
				</div>
				<img src="~/assets/img/hero-illustration.png" alt="Hospital Moinhos de Vento" />
			</div>
		</section>

		<section class="action">
			<div>
				<nuxt-link to="/" title="Clique aqui para solicitar atendimento">
					<img src="~/assets/img/action-illustration.png" alt="Chamada de emergência" />Chamada de emergência
				</nuxt-link>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '~/plugins/pages'

@Component
export default class userHome extends Page {
	test: string = 'site content'
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

			&:hover {
				animation: none;
			}

			img {
				opacity: 0.2;
				position: absolute;
				right: -12%;
				top: -10%;
			}
		}
	}

	@keyframes pulse {
		to {
			box-shadow: 0 0 0 45px rgba(226, 0, 27, 0);
		}
	}
}
</style>
