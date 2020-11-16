<template>
	<div id="">
		<div
			class="card-panel-content row"
			itemscope
			itemtype="http://schema.org/Blog"
		>
			<article
				v-for="page in pages"
				:key="page.key"
				class="ui-post entry col-md-4 card-container"
				itemprop="blogPost"
				itemscope
				itemtype="https://schema.org/BlogPosting"
			>
				<meta :content="page.path" itemprop="mainEntityOfPage" />
				<div class="entry card h-100">
					<div class="card-header-image">
						<NavLink :link="page.path">
							<img :src="page.frontmatter.featuredimg" />
						</NavLink>
					</div>
					<div class="card-inside">
						<h2 class="heading" itemprop="name headline">
							<NavLink :link="page.path" class="heading">{{
								page.title
							}}</NavLink>
						</h2>
						<p itemprop="description">
							{{ page.frontmatter.summary || page.summary }}
						</p>
					</div>
					<div class="card-subheading mt-auto">
						<div
							v-if="page.frontmatter.tags"
							class="ui-post-meta ui-post-tag"
							itemprop="keywords"
						>
							<router-link
								v-for="tag in resolvePostTags(page.frontmatter.tags)"
								:key="tag"
								:to="'/tag/' + tag"
							>
								{{ tag }}
							</router-link>
						</div>
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

import Vue from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/it'
import {
	Pagination,
	SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'
import NavLink from './NavLink'

export default {
	components: { NavLink },
	data() {
		return {
			paginationComponent: null,
		}
	},
	computed: {
		pages() {
			return this.$pagination.pages
		},
	},
	created() {
		this.paginationComponent = this.getPaginationComponent()
		dayjs.locale('it')
	},
	methods: {
		getPaginationComponent() {
			const n = THEME_BLOG_PAGINATION_COMPONENT
			if (n === 'Pagination') {
				return Pagination
			}
			if (n === 'SimplePagination') {
				return SimplePagination
			}
			return Vue.component(n) || Pagination
		},
		resolvePostDate(date) {
			return dayjs(date).format(this.$themeConfig.dateFormat)
		},
		resolvePostTags(tags) {
			if (!tags || Array.isArray(tags)) return tags
			return [tags]
		},
	},
}
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

.date
	margin-left: 50px;
	margin-top: -20px;

.username
	margin-top: -10px;

.ui-post-meta.ui-post-tag
	display: flex
	flex-wrap: wrap
	padding: 10px 0
</style>
