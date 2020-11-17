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
				path: "/tag/",
				pagination: {
					filter: (page, id, pid) => {
						const keys = ["tags"];
						const value = id;
						return keys.some(key => {
							const _value = page.frontmatter[key];
							if (Array.isArray(_value)) {
								return _value.some(i => i === value);
							}
							return _value === value;
						}) && !!page.frontmatter.published;
					}
				}
			},
			{
				id: "location",
				keys: ["location"],
				path: "/location/",
				layout: "PostsMap",
				pagination: {
					filter: (page, id, pid) => {
						const keys = ["location"];
						const value = id;
						return keys.some(key => {
							const _value = page.frontmatter[key];
							if (Array.isArray(_value)) {
								return _value.some(i => i === value);
							}
							return _value === value;
						}) && !!page.frontmatter.published;
					}
				}
			},
			{
				id: "category",
				keys: ["category"],
				path: "/category/",
				title: "",
				pagination: {
					filter: (page, id, pid) => {
						const keys = ["category"];
						const value = id;
						return keys.some(key => {
							const _value = page.frontmatter[key];
							if (Array.isArray(_value)) {
								return _value.some(i => i === value);
							}
							return _value === value;
						}) && !!page.frontmatter.published;
					}
				}
			}
		],
		globalPagination: {
			lengthPerPage: 8,
			filter: (page, id, pid) => page.pid === pid && page.id === id && !!page.frontmatter.published
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
				link: "/category/artisti/"
			},
			{
				text: "Recensioni",
				link: "/category/recensioni/"
			},
			{
				text: "Tag",
				link: "/tag/"
			},
			{
				text: "Luoghi",
				link: "/location/"
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
			shortname: "bottleofmusic",
			language: "it"
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
