<template>
  <div>
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
<script>
import BaseListLayout from "../global-components/BaseListLayout";
export default {
  components: {BaseListLayout}
};
</script>
