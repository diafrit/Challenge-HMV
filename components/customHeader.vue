<template>
	<header class="header">
		<div class="container">
			<nuxt-link class="logo" to="/" title="Hospital Moinhos de Vento">
				<img :src="require('~/assets/img/logo-hmv-small.png')" alt="Hospital Moinhos de Vento" />
			</nuxt-link>

			<nav>
				<ul>
					<li v-for="item in value.menu" :key="item.text">
						<nuxt-link :to="item.link" :title="item.text">{{ item.text }}</nuxt-link>
					</li>
				</ul>
			</nav>

			<div class="header-profile">
				<img :src="require('~/assets/img/avatar-' + value.profile.type + '.png')" alt="Hospital Moinhos de Vento" />
				<div>
					<strong>{{ value.profile.name }}</strong>
					<small>{{ value.profile.role }}</small>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class customHeader extends Vue {
	@Prop() value!: any
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.header {
	background-color: #fff;
	box-shadow: 0 4px 16px rgba(2, 82, 140, 0.1);
	height: 50px;
	padding: 10px 0;
	position: relative;
	z-index: 20;

	.logo {
		img {
			height: 50px;
		}
	}

	nav {
		display: inline-block;
		left: 25px;
		position: relative;
		top: -18px;

		ul {
			li {
				display: inline-block;

				&:not(:last-child) {
					margin-right: 25px;
				}

				a {
					color: $default;
					font-size: 1.1rem;
					transition: color 0.2s ease;
				}
			}
		}
	}

	&-profile {
		float: right;

		div {
			float: right;
			margin: 8px 0 0 10px;

			small {
				color: $gray;
				display: block;
				position: relative;
				top: -11px;
			}
		}

		img {
			border: 2px $default solid;
			border-radius: 100%;
			height: 42px;
			padding: 2px;
		}
	}

	@media (max-width: 680px) {
		nav {
			ul {
				li {
					a {
						font-size: 0.8rem;
					}
				}
			}
		}

		&-profile {
			margin-top: 3px;

			div {
				margin: -1px 0 0 5px;
				text-align: left;

				small {
					position: relative;
					top: -4px;
				}
			}

			@media (max-width: 500px) {
				div {
					display: none;
				}
			}
		}
	}

	@media (max-width: 400px) {
		height: 30px;

		.logo {
			img {
				height: 30px;
			}
		}

		nav {
			left: 10px;
			top: -10px;

			ul {
				li:not(:last-child) {
					margin-right: 12px;
				}
			}
		}

		&-profile {
			margin-top: 1px;

			img {
				border-width: 1px;
				height: 24px;
				padding: 1px;
			}
		}
	}
}
</style>
