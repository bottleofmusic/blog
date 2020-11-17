<template>
	<div class="post-meta">
		<div
			v-if="author"
			class="post-meta-author"
			itemprop="publisher author"
			itemscope
			itemtype="http://schema.org/Person"
		>
			<span itemprop="name">{{ author }}</span>
			<span v-if="location" itemprop="address"> &nbsp; in {{ location }}</span>
		</div>
		<div v-if="date" class="post-meta-date">
			<time :datetime="date" itemprop="datePublished" pubdate>
				{{ resolvedDate }}
			</time>
		</div>
		<div v-if="tags" class="card-subheading post-meta-tags" itemprop="keywords">
			<PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
		</div>
	</div>
</template>

<script>
import dayjs from 'dayjs'
import PostTag from './PostTag.vue'

export default {
	name: 'PostMeta',
	components: { PostTag },
	props: {
		tags: {
			type: [Array, String],
		},
		author: {
			type: String,
		},
		date: {
			type: String,
		},
		location: {
			type: String,
		},
	},
	computed: {
		resolvedDate() {
			return dayjs(this.date).format(this.$themeConfig.dateFormat)
		},
		resolvedTags() {
			if (!this.tags || Array.isArray(this.tags)) return this.tags
			return [this.tags]
		},
	},
	mounted() {
		dayjs.locale('it')
	},
}
</script>

<style lang="stylus">
.post-meta-tags
	margin-bottom: 40px;

	.post-tag::after
		content: '' !important
</style>
