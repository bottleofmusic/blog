<template>
	<router-link :to="'/tag/' + encodeURIComponent(tag)" class="post-tag">{{ tag }}</router-link>
</template>

<script>
export default {
	name: 'PostTag',
	props: {
		tag: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="stylus" scoped>
.post-tag
	padding-right 5px
	cursor pointer
	color $postTagColor
	text-decoration none
	transition color 0.2s

	&:not(:last-child)::after
		content ","
</style>
