<template>
  <div class="bg-container">
    <Background v-if="$route.path !== '/'" />
  </div>
</template>

<script>
import Background from "@theme/components/Background";
export default {
  components: { Background },
  computed: {
    bgImg() {
      return `background: url('${this.$frontmatter.image ||
        this.$themeConfig.background}')`;
    }
  },
  mounted() {}
};
</script>

<style src="../styles/layoutBackground.styl" lang="stylus"></style>
