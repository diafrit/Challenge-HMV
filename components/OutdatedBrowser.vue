<template>
	<div>
		<!--[if lt IE 10]>
			<p class="outdated">
				<strong>O seu navegador está desatualizado!</strong> Atualize o seu navegador para ter uma melhor experiência e
				visualização deste site. <a class="font-6" href="http://outdatedbrowser.com/pt-br" target="_blank"
				title="Atualize o seu navegador agora" >Atualize o seu navegador agora</a >
			</p>
		<![endif]-->
	</div>
</template>

<style lang="scss">
@import '@/assets/scss/base.scss';

.outdated {
	background-color: #f25648;
	color: #fff;
	padding: 15px;
	position: relative;
	text-align: left;

	strong {
		display: block;
		font-weight: bold;
		text-transform: uppercase;
	}

	a {
		border: 1px #fff solid;
		color: #fff;
		float: right;
		font-weight: bold;
		margin-top: -16px;
		padding: 5px 10px;
		text-transform: uppercase;
		transition: all 0.3s ease;

		&:hover {
			background-color: #fff;
			color: #f25648;
		}
	}

	@media (max-width: 900px) {
		text-align: center;

		a {
			display: block;
			float: none;
			margin-top: 30px;
		}
	}
}
</style>
