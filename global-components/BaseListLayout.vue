<template>
	<div class="posts-page">
		<div class="posts" itemscope itemtype="http://schema.org/Blog">
			<article
				v-for="page in pages"
				:key="page.key"
				class="post"
				itemprop="blogPost"
				itemscope
				itemtype="https://schema.org/BlogPosting"
			>
				<meta :content="page.path" itemprop="mainEntityOfPage"/>
				<NavLink :link="page.path">
					<div class="image">
						<img :alt="page.title" :src="page.frontmatter.featuredimg"/>
					</div>
					<h2 class="title" itemprop="name headline">{{ page.title }}</h2>
					<p class="description" itemprop="description">
						{{ page.frontmatter.summary || page.summary }}
					</p>
				</NavLink>
				<div
					v-if="page.frontmatter.tags"
					class="ui-post-meta ui-post-tag"
					itemprop="keywords"
				>
					<PostTag
						v-for="tag in resolvePostTags(page.frontmatter.tags)"
						:key="tag"
						:tag="tag"
					/>
				</div>
				<div class="meta-bottom">
					<div v-if="$themeConfig.authors">
						<NavLink
							v-for="author in $themeConfig.authors"
							v-if="author.name === page.frontmatter.author"
							:key="author.name"
							:link="author.link"
							class="nav-item"
						>
							<div class="d-flex">
								<a class="profile-avatar">
									<img
										:alt="author.name"
										:src="$withBase(author.avatar)"
										class="avatar-image"
									/>
								</a>
								<div class="meta">
									<span class="username">{{ author.name }}</span>
								</div>
							</div>
						</NavLink>
					</div>
					<div v-if="page.frontmatter.date" class="date">
						<time
							:datetime="page.frontmatter.date"
							itemprop="datePublished"
							pubdate
						>
							{{ resolvePostDate(page.frontmatter.date) }}
						</time>
					</div>
				</div>
			</article>
		</div>
		<component
			:is="paginationComponent"
			v-if="$pagination.length > 1 && paginationComponent"
		></component>
	</div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from "vue";
import dayjs from "dayjs";
import "dayjs/locale/it";
import {Pagination, SimplePagination} from "@vuepress/plugin-blog/lib/client/components";
import PostTag from "@theme/components/PostTag.vue";

export default {
	components: {PostTag},
	data() {
		return {
			paginationComponent: null
		};
	},
	computed: {
		pages() {
			return this.$pagination.length > 0 ? this.$pagination.pages : [];
		}
	},
	created() {
		this.paginationComponent = this.getPaginationComponent();
		dayjs.locale("it");
	},
	methods: {
		getPaginationComponent() {
			const n = THEME_BLOG_PAGINATION_COMPONENT;
			if (n === "Pagination") {
				return Pagination;
			}
			if (n === "SimplePagination") {
				return SimplePagination;
			}
			return Vue.component(n) || Pagination;
		},
		resolvePostDate(date) {
			return dayjs(date).format(this.$themeConfig.dateFormat);
		},
		resolvePostTags(tags) {
			if (!tags || Array.isArray(tags)) return tags;
			return [tags];
		}
	}
};
</script>

<style lang="stylus">
.pagination > li > a, .pagination > li > span
	border: 0;
	border-bottom: 1px solid #ddd
	font-size: 15px
	font-weight: 700

.pagination > li:last-child > a, .pagination > li:last-child > span, .pagination > li:first-child > a, .pagination > li:first-child > span
	border-radius: 0

.pagination > li > a, .pagination > li > span
	color: inherit
	background: none

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus
	background: none
	border-bottom: 1px solid
	color: $accentColor

.posts-page
	max-width: 960px
	margin: 0 auto
	padding: 30px
	display: flex
	flex-direction column
	align-items: center
	box-sizing content-box

	.posts
		display: grid
		grid-gap: 30px
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))

.post
	margin-bottom: 20px

	a
		color unset
		text-decoration: none !important

	.title, .title:hover
		padding-top: 15px
		padding-bottom: 5px;
		font-size 21.5px
		font-weight: bold
		color: black !important

	.description, .description:hover
		font-size 16px
		font-weight: normal
		color: $textColor !important

	.image
		position: relative
		box-shadow: 0 0 15px rgba(0, 0, 0, .1)
		border-radius: 3px
		overflow: hidden;

		&::before
			content: ''
			padding-top: 100%;
			display: block;

		img
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			object-fit: cover
			object-position: top
			height: 100%
			width: 100%

	.date
		margin-left: 50px;
		margin-top: -20px;

	.username
		margin-top: -10px;

	.ui-post-meta.ui-post-tag
		display: flex
		flex-wrap: wrap
		padding: 0 0 10px 0
		font-size 12px
</style>
