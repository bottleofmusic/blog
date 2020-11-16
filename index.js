const removeMd = require('remove-markdown')
const path = require('path')
const pick = require('lodash/pick')

module.exports = themeConfig => {
	let resolvedFeedOptions
	const isFeedEnabled = themeConfig.feed && themeConfig.feed.canonical_base
	if (isFeedEnabled) {
		const {
			rss = true,
			atom = true,
			json = true,
			...feedOptions
		} = themeConfig.feed
		resolvedFeedOptions = Object.assign({}, feedOptions, {
			feeds: {
				rss2: { enable: rss },
				atom1: { enable: atom },
				json1: { enable: json },
			},
		})
	}

	const properties = [
		'directories',
		'frontmatters',
		'globalPagination',
		'sitemap',
		'comment',
		'newsletter',
	]

	const plugins = [
		'@vuepress/plugin-nprogress',
		['@vuepress/medium-zoom', true],
		[
			'@vuepress/search',
			{
				searchMaxSuggestions: 10,
			},
		],
		[
			'@vuepress/blog',
			{
				...pick(themeConfig, properties),
				feed: resolvedFeedOptions,
			},
		],
		['smooth-scroll', themeConfig.smoothScroll === true],
	]

	/**
	 * Enable pwa
	 */
	if (themeConfig.pwa) {
		plugins.push([
			'@vuepress/pwa',
			{
				serviceWorker: true,
				updatePopup: true,
			},
		])
	}

	return {
		plugins: plugins,
		define: {
			THEME_BLOG_PAGINATION_COMPONENT: themeConfig.paginationComponent
				? themeConfig.paginationComponent
				: 'Pagination',
		},
		alias: {
			fonts: path.resolve(__dirname, 'fonts'),
		},
		/**
		 * Generate summary.
		 */
		extendPageData(pageCtx) {
			const strippedContent = pageCtx._strippedContent
			if (!strippedContent) {
				return
			}
			if (themeConfig.summary) {
				pageCtx.summary =
					removeMd(
						strippedContent
							.trim()
							.replace(/^#+\s+(.*)/, '')
							.slice(0, themeConfig.summaryLength)
					) + ' ...'
				pageCtx.frontmatter.description = pageCtx.summary
			}
			if (pageCtx.frontmatter.summary) {
				pageCtx.frontmatter.description = pageCtx.frontmatter.summary
			}
		},
	}
}
