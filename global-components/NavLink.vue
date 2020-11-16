<template>
	<router-link
		v-if="!isExternal(normalizedlink)"
		:exact="exact"
		:to="normalizedlink"
		class=""
	>
		<slot />
	</router-link>
	<a
		v-else
		:href="normalizedlink"
		:rel="
			isMailto(normalizedlink) || isTel(normalizedlink)
				? null
				: 'noopener noreferrer'
		"
		:target="
			isMailto(normalizedlink) || isTel(normalizedlink) ? null : '_blank'
		"
		class="external"
	>
		<slot />
	</a>
</template>

<script>
import { ensureExt, isExternal, isMailto, isTel } from '../components/util'

export default {
	props: {
		link: {
			required: true,
		},
	},

	computed: {
		normalizedlink() {
			return ensureExt(this.link)
		},

		exact() {
			if (this.$site.locales) {
				return Object.keys(this.$site.locales).some(
					rootLink => rootLink === this.normalizedlink
				)
			}
			return this.normalizedlink === '/'
		},
	},

	methods: {
		isExternal,
		isMailto,
		isTel,
	},
}
</script>

<style lang="stylus">
.nav-link
	color $darkTextColor

.nav-link
	&:hover, &.router-link-active
		color $accentColor
</style>
