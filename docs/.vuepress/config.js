module.exports = {
	title: "Bottle of Music",
	base: "/",
	dest: "public",
	description: "Bottle of Music",
	logo: "/assets/img/icon.png",
	theme: require.resolve("../../"),
	locales: {
		"/": {
			lang: "it-IT"
		}
	},
	themeConfig: {
		logo: "/assets/img/icon.png",
		summary: true,
		summaryLength: 200,
		directories: [
			{
				id: "post",
				dirname: "_posts",
				path: "/",
				itemPermalink: "/:slug"
			}
		],
		frontmatters: [
			{
				id: "tag",
				keys: ["tags"],
				path: "/tag/"
			},
			{
				id: "location",
				keys: ["location"],
				path: "/luoghi/"
			},
			{
				id: "category",
				keys: ["category"],
				path: "/categoria/"
			}
		],
		globalPagination: {
			lengthPerPage: 9,
			filter: page => !!page.frontmatter.published
		},
		authors: [
			{
				name: "Alice Dini",
				avatar: "/assets/img/ad.jpg",
				link: "/autori/alice-dini"
			},
			{
				name: "AC",
				avatar: "/assets/img/ac.png"
			}
		],
		nav: [
			{
				text: "Home",
				link: "/"
			},
			{
				text: "Artisti",
				link: "/categoria/artisti/"
			},
			{
				text: "Recensioni",
				link: "/categoria/recensioni/"
			},
			{
				text: "Tag",
				link: "/tag/"
			},
			{
				text: "Luoghi",
				link: "/luoghi/"
			},
			{
				text: "Informazioni",
				link: "/informazioni"
			}
		],
		footer: {
			contact: [
				{
					type: "facebook",
					link: "https://www.facebook.com/bottleofmusic/"
				},
				{
					type: "instagram",
					link: "https://www.instagram.com/bottleofmusic/"
				},
				{
					type: "twitter",
					link: "https://twitter.com/bottle_of_music"
				},
				{
					type: "mixcloud",
					link: "https://www.mixcloud.com/bottleofmusic/"
				},
				{
					type: "mail",
					link: "mailto:bottleofmusicblog@gmail.com"
				}
			],
			copyright: [
				{
					text: "Copyright © 2020, Bottle of Music. Tutti i diritti riservati. All rights reserved."
				}
			]
		},
		sitemap: {
			hostname: "https://bottleofmusic.it/"
		},
		comment: {
			service: "disqus",
			shortname: "bottleofmusic"
		},
		newsletter: {
			endpoint: ""
		},
		feed: {
			canonical_base: "https://bottleofmusic.it/"
		},
		smoothScroll: true,
		dateFormat: "dddd, DD MMMM YYYY",
		pwa: true
	}
};
