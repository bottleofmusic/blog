<template>
  <div id="vuepress-theme-blog__tags-layout">
    <BlogTags :tags="$frontmatterKey.list"/>
  </div>
</template>
<script>
import BlogTags from "../global-components/BlogTags";

export default {
  components: {BlogTags}
};
</script>
