<template>
  <div @touchend="onTouchEnd">
    <!-- <NavBar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" /> -->
    <LayOutBackground />
    <!-- <BackToTop /> -->
    <Common class="common" ref="nowContent" :isComment="true">
      <Home v-if="$frontmatter.home && $themeConfig.type !== 'blog'" />
      <HomeBlog v-else-if="$frontmatter.home && $themeConfig.type === 'blog'" />
      <Page v-else :sidebar-items="sidebarItems">
        <slot name="page-top" slot="top" />
        <slot name="page-bottom" slot="bottom" />
      </Page>
    </Common>
  </div>
</template>

<script>
import LayOutBackground from "@theme/components/LayOutBackground.vue";
import Home from "@theme/components/Home.vue";
import HomeBlog from "@theme/components/HomeBlog.vue";
import Page from "@theme/components/Page.vue";
import Common from "@theme/components/Common.vue";
import NavBar from "@theme/components/NavBar.vue";
import BackToTop from "@theme/components/BackToTop";
import { resolveSidebarItems } from "../util";

export default {
  components: {
    HomeBlog,
    Home,
    Page,
    Common,
    LayOutBackground,
    NavBar,
    BackToTop
  },

  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    }
  },
  methods: {
    toggleSidebar(to) {
      this.$refs.nowContent.isSidebarOpen =
        typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
