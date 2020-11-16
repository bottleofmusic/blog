<template>
	<footer class="themefooter">
		<div class="container">
			<div class="row justify-content-between">
				<div class="col">
					<img
						:src="$withBase($themeConfig.logo)"
						alt="Logo"
						class="logofooter"
					/>
				</div>
				<div class="col text-right">
					<ul v-if="contact" class="contact-list list-unstyled">
						<li
							v-for="item in contact"
							:key="item.iconComponent"
							class="contact-item"
						>
							<NavLink :link="item.link">
								<component :is="item.iconComponent"></component>
								{{ item.text }}
							</NavLink>
						</li>
						<li class="contact-item">
							<Feed />
						</li>
					</ul>
					<ul v-if="copyright" class="list-unstyled">
						<li
							v-for="item in copyright"
							:key="item.text"
							class="copyright-item"
						>
							{{ item.text }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import {
	CloudIcon,
	FacebookIcon,
	GlobeIcon,
	InstagramIcon,
	LinkedinIcon,
	MailIcon,
	RssIcon,
	TwitterIcon,
} from 'vue-feather-icons'
import Feed from './Feed'

export default {
	components: {
		Feed,
		FacebookIcon,
		GlobeIcon,
		InstagramIcon,
		LinkedinIcon,
		MailIcon,
		TwitterIcon,
		CloudIcon,
		RssIcon,
	},
	computed: {
		contact() {
			return (
				(this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
				[]
			)
				.map(({ type, link }) => {
					return {
						iconComponent: this.getIconComponentName(type),
						link,
					}
				})
				.filter(({ iconComponent }) => iconComponent)
		},
		copyright() {
			return (
				(this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
			)
		},
	},
	methods: {
		getIconComponentName(contactType) {
			switch (contactType) {
				case 'facebook':
					return 'FacebookIcon'
				case 'twitter':
					return 'TwitterIcon'
				case 'linkedin':
					return 'LinkedinIcon'
				case 'mixcloud':
					return 'CloudIcon'
				case 'mail':
					return 'MailIcon'
				case 'feed':
					return 'RssIcon'
			}
		},
	},
}
</script>
<style lang="stylus">
.contact-list
	.contact-item
		display: inline-block;
		margin 5px
</style>
