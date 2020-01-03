<template>
  <div class="valine-wrapper" v-show="isShowComment">
    <!-- id 将作为查询条件 -->
    <!-- <span :id="`${$page.path}`" class="leancloud_visitors" :data-flag-title="$page.title">
        <span class="post-meta-item-text">这篇文章有</span>
        <i class="leancloud-visitors-count">100</i>
        <span class="post-meta-item-text">人已经看过啦~</span>
    </span> -->
    <div id="valine"></div>
  </div>
</template>

<script>
export default {
  props: ["isComment"],
  computed: {
    // 是否显示评论
    isShowComment() {
      const frontmatter = this.$frontmatter;
      return this.isComment == false ||
        frontmatter.isComment == false ||
        frontmatter.home == true
        ? false
        : true;
    }
  },
  mounted: function() {
    this.createValine();
    
  },
  methods: {
    createValine() {
      
      const valineConfig = this.$themeConfig.valineConfig;
      const Valine = require("valine");
      const AV = require("leancloud-storage");
      if (typeof window !== "undefined") {
        this.window = window;
        window.AV = AV;
      }
      new Valine({
        el: "#valine",
        appId: "XgWjiYk99zvjMD61v1b89VNg-gzGzoHsz", // your appId
        appKey: "K2FxqHftdXNOR8HUF4HmGfOv", // your appKey
        placeholder: "评论前先在上面留下大名哦~",
        notify: false,
        verify: false,
        avatar: "robohash",
        visitor: true,
        recordIP: true,
        path: window.location.pathname,
        visitor: true
      });
    }
  },
  watch: {
    $route(to, from) {
      if (to.path !== from.path) {
        // 切换页面时刷新评论
        // this.$router.go(0)
        setTimeout(() => {
          this.createValine();
        }, 300);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.theme-container.no-sidebar {
  .valine-wrapper {
    padding-left: 0;
  }
}
.leancloud_visitors {
  width: 100%;
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem 1rem 0;
  text-align: center;
  color: #666;
  font-size: 0.8rem;
  }

.valine-wrapper {
  background-color: #fff;
  padding-left: 20rem;

  #valine {
    padding: 2rem 0;
    max-width: 820px;
    margin: 0 auto;
  }
}

@media (max-width: $MQNarrow) {
  .theme-container.no-sidebar {
    .valine-wrapper {
      padding-left: 0;
    }
  }

  .valine-wrapper {
    padding-left: 16.4rem;
  }
}

@media (max-width: $MQMobile) {
  .valine-wrapper {
    padding-left: 0;
  }
}
</style>
