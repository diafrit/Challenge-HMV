<template>
	<footer>
		<div class="container">
			<nuxt-link class="header-logo" to="/" title="Hospital Moinhos de Vento">
				<img src="~/assets/img/logo-hmv.png" alt="Hospital Moinhos de Vento" />
			</nuxt-link>

			<p>2022 - Challenge Hospital Moinhos de Vento - 6AOJO, 3ABDO e 2SCJO - Grupo 3</p>
		</div>
	</footer>
</template>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

footer {
	background-color: $bg-dark;
	display: inline-block;
	overflow: hidden;
	padding: 30px 0;
	position: relative;
	width: 100%;

	&:before {
		background: url(~assets/img/footer-bg.png) no-repeat 0 bottom;
		background-size: contain;
		bottom: 0;
		content: '';
		display: block;
		height: 400px;
		mix-blend-mode: overlay;
		position: absolute;
		right: 0;
		width: 855px;
		z-index: 0;
	}

	img {
		display: block;
		margin: 0 auto;
	}

	p {
		border-top: 1px $gray solid;
		color: $gray;
		font-size: 0.8rem;
		margin-top: 60px;
		padding-top: 15px;
		text-align: center;
	}
}
</style>
