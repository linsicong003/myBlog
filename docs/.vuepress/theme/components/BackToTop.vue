<template>
  <transition :name="transitionName">
    <div v-show="visible" :style="customStyle" class="back-to-ceiling" @click="backToTop">
      <i class="iconfont reco-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BackToTop",
  props: {
    visibilityHeight: {
      type: Number,
      default: 400
    },
    backPosition: {
      type: Number,
      default: 0
    },
    customStyle: {
      type: Object,
      default: function() {
        return {
          right: "1rem",
          bottom: "6rem",
          width: "2.5rem",
          height: "2.5rem",
          "border-radius": ".25rem",
          "line-height": "2.5rem",
          backgroundColor: "rgba(231, 234, 241,.5)"
        };
      }
    },
    transitionName: {
      type: String,
      default: "fade"
    }
  },
  data() {
    return {
      visible: false,
      interval: null,
      isMoving: false,
      // 容器 DOM 节点
      common: null
    };
  },
  watch: {
    $route: {
      handler(val) {
        if (val.path === "/") {
          this.backToTop();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.common = document.getElementById("common");

    this.common.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    this.common.removeEventListener("scroll", this.handleScroll);
    if (this.interval) {
      clearInterval(this.interval);
    }
  },
  methods: {
    handleScroll() {
      this.visible = this.common.scrollTop > this.visibilityHeight;
    },
    backToTop() {
      console.log("click");
      if (this.isMoving) return;
      const start = this.common.scrollTop;
      let i = 0;
      this.isMoving = true;
      this.interval = setInterval(() => {
        const next = Math.floor(this.easeInOutQuad(10 * i, start, -start, 500));
        if (next <= this.backPosition) {
          this.common.scrollTo(0, this.backPosition);
          clearInterval(this.interval);
          this.isMoving = false;
        } else {
          this.common.scrollTo(0, next);
        }
        i++;
      }, 16.7);
    },
    easeInOutQuad(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (-c / 2) * (--t * (t - 2) - 1) + b;
    }
  }
};
</script>

<style lang="stylus" scoped>
.back-to-ceiling {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  z-index: 19;

  i {
    font-size: 1.6rem;
    color: $accentColor;
  }
}

.back-to-ceiling:hover {
  background: #d5dbe7;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(120px);
}

.back-to-ceiling .Icon {
  fill: #9aaabf;
  background: none;
}
</style>