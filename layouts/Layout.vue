<template>
	<div>
		<BaseListLayout v-if="$pagination" class="container"/>
		<Content v-else class="container"/>
	</div>
</template>
<style lang="stylus">
.container
	max-width: 960px
	margin: 0 auto
	padding: 0 30px
.content__default
	h1, h2, h3, h4, h5
		margin-top 0
</style>
