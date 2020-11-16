<template>
	<div v-if="$themeConfig.authors">
		<div v-for="author in $themeConfig.authors" :key="author.name">
			<NavLink
				v-if="author.name === $frontmatter.author"
				:link="author.link"
				class="d-flex align-items-center"
			>
				<span class="profile-avatar">
					<img
						:alt="author.name"
						:src="$withBase(author.avatar)"
						class="avatar-image"
					/>
				</span>
				<span>{{ author.name }}</span>
			</NavLink>
		</div>
	</div>
</template>
