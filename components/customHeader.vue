<template>
	<header class="header">
		<div class="container">
			<nav>
				<ul>
					<li>
						<nuxt-link to="/usuario" title="Home">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/usuario/dados" title="Cadastro">Cadastro</nuxt-link>
					</li>
					<li>
						<nuxt-link to="/usuario/emergencia" title="Emergência">Emergência</nuxt-link>
					</li>
				</ul>
			</nav>

			<div class="header-profile">
				<img src="~/assets/img/avatar-user.png" alt="Hospital Moinhos de Vento" />
				<div>
					<strong>Lucia Maria</strong>
					<small>Paciente</small>
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class customHeader extends Vue {}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.header {
	background-color: #fff;
	box-shadow: 0 4px 16px rgba(2, 82, 140, 0.1);
	height: 50px;
	padding: 10px 0;

	&-logo {
		img {
			height: 50px;
		}
	}

	nav {
		display: inline-block;
		position: relative;
		top: 11px;

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
		height: auto;

		&-logo {
			img {
				height: 30px;
			}
		}

		nav {
			top: -8px;

			ul {
				li {
					margin-left: 7px;

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

			img {
				border-width: 1px;
				height: 24px;
				padding: 1px;
			}

			@media (max-width: 460px) {
				div {
					display: none;
				}
			}
		}
	}
}
</style>
