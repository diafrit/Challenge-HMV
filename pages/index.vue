<template>
	<h1>{{ test }}</h1>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { Page } from '~/plugins/pages'

@Component
export default class Home extends Page {
	test: string = 'site content'
}
</script>

<style scoped lang="scss">
h1 {
	color: grey;
}
</style>
