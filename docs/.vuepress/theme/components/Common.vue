<template>
  <div class="main-container">
    <Navbar v-if="shouldShowNavbar && !full" @toggle-sidebar="toggleSidebar" />
    <BackToTop></BackToTop>
    <div
      class="theme-container"
      id="common"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <AboutMe v-if="isAboutMe"/>
      <Password v-if="!isHasKey"></Password>
      <div class="common-content" id="mainContent" v-else>
        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
        <Sidebar
          :items="sidebarItems"
          @toggle-sidebar="toggleSidebar"
          v-if="!$route.path.includes('timeLine') && !isAboutMe"
        >
          <slot name="sidebar-top" slot="top" />
          <slot name="sidebar-bottom" slot="bottom" />
        </Sidebar>

        <Password v-if="!isHasPageKey" :isPage="true"></Password>
        <div :class="{'category': $route.path.includes('category')}" v-else>
          <slot></slot>
          <Valine :isComment="isComment" v-if="!isAboutMe"></Valine>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";
import Password from "@theme/components/Password";
import Valine from "@theme/components/Valine/";
import BackToTop from "@theme/components/BackToTop";
import AboutMe from "@theme/components/AboutMe"


export default {
  components: { Sidebar, Navbar, Password, Valine, BackToTop, AboutMe },

  props: ["sidebar", "isComment"],

  data() {
    return {
      isSidebarOpen: false,
      isHasKey: true,
      isHasPageKey: true,
      nightMode: false,
      full: false
    };
  },

  computed: {
    isAboutMe() {
      return this.$route.path.includes('/AboutMe')
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
    },
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        this.sidebar !== false &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$frontmatter.pageClass;
      return [
        {
          'full-screen': this.$route.path.includes('/tag/'),
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
          "night-mode": this.nightMode
        },
        userPageClass
      ];
    }
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });

    if (localStorage.getItem("nightMode")) {
      document.documentElement.style.background = "#000";
      this.nightMode = true;
    }

    this.hasKey();
    this.hasPageKey();
    // 监听全屏事件
    document.addEventListener("fullscreenchange", e => {
      if (document.fullscreenElement) {
        console.log("已进入全屏");
        this.full = true;
        this.$tip.success({ title: "您已进入全屏预览模式" });
        this.$bus.$emit('openFull');
      } else {
        this.full = false;
        this.$tip.success({ title: "您已退出全屏预览模式" });
        this.$bus.$emit('closeFull');
      }
    });
  },

  methods: {
    hasKey() {
      const keyPage = this.$themeConfig.keyPage;
      if (!keyPage) {
        this.isHasKey = true;
        return;
      }

      const keys = keyPage.keys;
      this.isHasKey = keys && keys.indexOf(sessionStorage.getItem("key")) > -1;
    },
    hasPageKey() {
      const pageKeys = this.$frontmatter.keys;
      if (!pageKeys) {
        this.isHasPageKey = true;
        return;
      }

      this.isHasPageKey =
        pageKeys && pageKeys.indexOf(sessionStorage.getItem("pageKey")) > -1;
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
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
  },

  watch: {
    $frontmatter(newVal, oldVal) {
      if (newVal.home) {
        this.hasKey();
        this.hasPageKey();
      }
    }
  }
};
</script>
<style>
.common-content {
  width: 100vw;
  background: #fff;
}
</style>
