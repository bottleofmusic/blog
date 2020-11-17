<template>
	<div class="row justify-content-center">
		<div class="blog-tags col-md-10 text-center mt-5">
			<h1 class="font-secondary mb-5 font-weight-bold">Tags</h1>
			<BlogTag
				v-for="tag in tags.sort((a, b) => a.name.localeCompare(b.name))"
				v-if="
					tag.pages.filter(value => !!value.frontmatter.published).length > 0
				"
				:key="tag.name"
				:tag="tag"
			/>
		</div>
	</div>
</template>

<script>
import BlogTag from './BlogTag'

export default {
	components: { BlogTag },
	props: ['tags'],
}
</script>

<style lang="stylus" scoped>
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,400i,700&display=swap')
.blog-tags
	min-height: 500px

.blog-tag
	border-radius: 50px

	&:hover
		text-decoration: none

h1
	line-height: 1.3
</style>
