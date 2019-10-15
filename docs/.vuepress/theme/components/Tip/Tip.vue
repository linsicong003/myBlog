<template>
  <transition name="fade">
    <div class="ani-container" v-if="cShow">
      <div class="tip-container">
        <div class="tip-icon">
          <!--<img :src=require("'@/components/Notify/image/' + type + '.svg'")>-->
          <img :src="imgSrc" alt="状态图标" />
        </div>
        <div class="tip-text">
          <div class="tip-title">{{ title }}</div>
          <div class="tip-content">{{ content }}</div>
          <div class="tip-cancel" @click="hide"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: "BlogTip",
  props: {
    type: {
      type: String,
      default: "",
      validator: val =>
        ["", "info", "success", "warning", "error"].includes(val)
      // ['info', 'success', 'warning', 'error'] 表示type只接收这四个字符串作为参数传入message组件
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cShow: false
    };
  },
  computed: {
    imgSrc() {
      // 图片资源依赖于项目，后期需要单独打包
      return require(`@theme/components/Tip/image/${this.type}.svg`);
    }
  },
  watch: {
    show: {
      handler(val) {
        this.cShow = val;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    hide() {
      this.cShow = false;
    }
  }
};
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.ani-container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2019;
}

.tip-container {
  width: 330px;
  box-sizing: border-box;
  padding: 14px 26px 14px 26px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  color: #333;
  position: absolute;
  top: 58px;
  right: 0;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  z-index: 2019;
  display: flex;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}

.tip-icon {
  height: 48px;
  width: 50px;
  display: inline-block;
  position: relative;
}

.tip-icon img {
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.tip-text {
  display: inline-block;
}

.tip-title {
  font-weight: 700;
  font-size: 16px;
  color: #303133;
  margin: 0;
}

.tip-content {
  font-size: 14px;
  line-height: 21px;
  margin: 6px 0 0;
  color: #606266;
  text-align: justify;
}

.tip-cancel {
  position: absolute;
  width: 15px;
  height: 15px;
  top: 14px;
  right: 10px;
  cursor: pointer;
}

.tip-cancel::before {
  content: '';
  width: 13px;
  height: 2px;
  /* border-top: 10px solid #999; */
  background-color: #999;
  position: absolute;
  top: 5px;
  right: 0;
  transform: rotate(45deg);
}

.tip-cancel::after {
  content: '';
  width: 13px;
  height: 2px;
  /* border-top: 10px solid #999; */
  background-color: #999;
  position: absolute;
  transform: rotate(135deg);
  top: 5px;
  right: 0;
}

@media (max-width: $MQMobile) {
  .tip-container {
    width: 100%;
  }

  .tip-icon {
    display: none;
  }
}
</style>
