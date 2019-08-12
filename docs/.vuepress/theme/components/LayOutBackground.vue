<template>
  <div class="bg-container" :style="bgImg"></div>
</template>

<<script>
export default {
    computed: {
        bgImg() {
            return `background: url('${this.$frontmatter.image || this.$themeConfig.background}')`
        }
    },
    mounted() {
    }
}
</script>

<style src="../styles/layoutBackground.styl" lang="stylus"></style>
