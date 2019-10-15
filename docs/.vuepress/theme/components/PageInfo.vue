<template>
  <div style="position: relative;">
    <i
      class="iconfont reco-account"
      v-if="pageInfo.frontmatter.author || $themeConfig.author || $site.title"
    >
      <span>{{ pageInfo.frontmatter.author || $themeConfig.author || $site.title }}</span>
    </i>
    <i class="iconfont reco-date" v-if="pageInfo.frontmatter.date">
      <span>{{ new Date(pageInfo.frontmatter.date).toLocaleDateString() }}</span>
    </i>
    <AccessNumber v-if="isHome !== true" :idVal="pageInfo.path" :numStyle="numStyle"></AccessNumber>
    <i class="iconfont reco-tag tags" v-if="pageInfo.frontmatter.tags">
      <span
        v-for="(subItem, subIndex) in pageInfo.frontmatter.tags"
        :key="subIndex"
        class="tag-item"
        :class="{ 'active': currentTag == subItem }"
        @click="goTags(subItem)"
      >{{subItem}}</span>
    </i>
    <span class="pageFull" @click="full" v-if="fullShow">全屏</span>
  </div>
</template>

<script>
import AccessNumber from "./Valine/AccessNumber";

export default {
  components: { AccessNumber },
  // props: ['pageInfo', 'currentTag'],
  props: {
    pageInfo: {
      type: Object,
      default: {}
    },
    currentTag: {
      type: String,
      default: ""
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      numStyle: {
        fontSize: ".9rem",
        fontWeight: "normal",
        color: "#999"
      }
    };
  },
  computed: {
    fullShow() {
      const path = this.$route.path;
      console.log(this.$page);
      return path !== "/" && !path.includes("category");
    }
  },

  methods: {
    goTags(tag) {
      const base = this.$site.base;
      window.location.href = `${base}tag/#?tag=${tag}`;
    },
    full() {
      const content = document.getElementById("app");
      if (content.requestFullscreen) {
        content.requestFullscreen();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.iconfont {
  display: inline-block;
  line-height: 1.5rem;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  span {
    margin-left: 0.5rem;
  }
}

.pageFull {
  font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.9rem;
  color: #4096fe;
  cursor: pointer;
  position: absolute;
  right: 2px;
}

.tags {
  .tag-item {
    cursor: pointer;
    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

    &.active {
      color: $accentColor;
    }

    &:hover {
      color: $accentColor;
    }
  }
}

@media (max-width: $MQMobile) {
  .tags {
    display: block;
    margin-left: 0 !important;
  }

  .pageFull {
    display: none;
  }
}
</style>
